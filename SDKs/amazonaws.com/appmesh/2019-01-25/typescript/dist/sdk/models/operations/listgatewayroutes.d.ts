import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListGatewayRoutesPathParams extends SpeakeasyBase {
    meshName: string;
    virtualGatewayName: string;
}
export declare class ListGatewayRoutesQueryParams extends SpeakeasyBase {
    limit?: number;
    meshOwner?: string;
    nextToken?: string;
}
export declare class ListGatewayRoutesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListGatewayRoutesRequest extends SpeakeasyBase {
    pathParams: ListGatewayRoutesPathParams;
    queryParams: ListGatewayRoutesQueryParams;
    headers: ListGatewayRoutesHeaders;
}
export declare class ListGatewayRoutesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listGatewayRoutesOutput?: shared.ListGatewayRoutesOutput;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
