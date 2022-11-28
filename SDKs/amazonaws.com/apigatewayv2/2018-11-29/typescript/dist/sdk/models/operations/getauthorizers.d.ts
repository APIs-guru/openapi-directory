import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAuthorizersPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class GetAuthorizersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetAuthorizersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAuthorizersRequest extends SpeakeasyBase {
    pathParams: GetAuthorizersPathParams;
    queryParams: GetAuthorizersQueryParams;
    headers: GetAuthorizersHeaders;
}
export declare class GetAuthorizersResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getAuthorizersResponse?: shared.GetAuthorizersResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
