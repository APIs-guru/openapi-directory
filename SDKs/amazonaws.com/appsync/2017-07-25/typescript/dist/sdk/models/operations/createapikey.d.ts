import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateApiKeyPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class CreateApiKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateApiKeyRequestBody extends SpeakeasyBase {
    description?: string;
    expires?: number;
}
export declare class CreateApiKeyRequest extends SpeakeasyBase {
    pathParams: CreateApiKeyPathParams;
    headers: CreateApiKeyHeaders;
    request: CreateApiKeyRequestBody;
}
export declare class CreateApiKeyResponse extends SpeakeasyBase {
    apiKeyLimitExceededException?: any;
    apiKeyValidityOutOfBoundsException?: any;
    badRequestException?: any;
    contentType: string;
    createApiKeyResponse?: shared.CreateApiKeyResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
