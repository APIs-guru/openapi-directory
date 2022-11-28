import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeRoutePathParams extends SpeakeasyBase {
    meshName: string;
    routeName: string;
    virtualRouterName: string;
}
export declare class DescribeRouteQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class DescribeRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeRouteRequest extends SpeakeasyBase {
    pathParams: DescribeRoutePathParams;
    queryParams: DescribeRouteQueryParams;
    headers: DescribeRouteHeaders;
}
export declare class DescribeRouteResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    describeRouteOutput?: shared.DescribeRouteOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
