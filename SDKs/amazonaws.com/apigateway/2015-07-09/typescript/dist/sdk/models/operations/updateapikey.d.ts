import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateApiKeyPathParams extends SpeakeasyBase {
    apiKey: string;
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
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateApiKeyRequest extends SpeakeasyBase {
    pathParams: UpdateApiKeyPathParams;
    headers: UpdateApiKeyHeaders;
    request: UpdateApiKeyRequestBody;
}
export declare class UpdateApiKeyResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
