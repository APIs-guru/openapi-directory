import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRoutesPathParams extends SpeakeasyBase {
    meshName: string;
    virtualRouterName: string;
}
export declare class ListRoutesQueryParams extends SpeakeasyBase {
    limit?: number;
    meshOwner?: string;
    nextToken?: string;
}
export declare class ListRoutesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRoutesRequest extends SpeakeasyBase {
    pathParams: ListRoutesPathParams;
    queryParams: ListRoutesQueryParams;
    headers: ListRoutesHeaders;
}
export declare class ListRoutesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listRoutesOutput?: shared.ListRoutesOutput;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
