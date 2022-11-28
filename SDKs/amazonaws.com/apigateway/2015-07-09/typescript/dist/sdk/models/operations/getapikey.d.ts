import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiKeyPathParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetApiKeyQueryParams extends SpeakeasyBase {
    includeValue?: boolean;
}
export declare class GetApiKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApiKeyRequest extends SpeakeasyBase {
    pathParams: GetApiKeyPathParams;
    queryParams: GetApiKeyQueryParams;
    headers: GetApiKeyHeaders;
}
export declare class GetApiKeyResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
