import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListIdentityPoolUsageQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListIdentityPoolUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListIdentityPoolUsageRequest extends SpeakeasyBase {
    queryParams: ListIdentityPoolUsageQueryParams;
    headers: ListIdentityPoolUsageHeaders;
}
export declare class ListIdentityPoolUsageResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    listIdentityPoolUsageResponse?: shared.ListIdentityPoolUsageResponse;
    notAuthorizedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
