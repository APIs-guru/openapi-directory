import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateApiKeyPathParams extends SpeakeasyBase {
    apiId: string;
    id: string;
}
export declare class UpdateApiKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateApiKeyRequestBody extends SpeakeasyBase {
    description?: string;
    expires?: number;
}
export declare class UpdateApiKeyRequest extends SpeakeasyBase {
    pathParams: UpdateApiKeyPathParams;
    headers: UpdateApiKeyHeaders;
    request: UpdateApiKeyRequestBody;
}
export declare class UpdateApiKeyResponse extends SpeakeasyBase {
    apiKeyValidityOutOfBoundsException?: any;
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateApiKeyResponse?: shared.UpdateApiKeyResponse;
}
