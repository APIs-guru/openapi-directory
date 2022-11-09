import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAuthorizersPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class GetAuthorizersQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
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
    authorizers?: shared.Authorizers;
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
