import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteApiKeyPathParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class DeleteApiKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteApiKeyRequest extends SpeakeasyBase {
    pathParams: DeleteApiKeyPathParams;
    headers: DeleteApiKeyHeaders;
}
export declare class DeleteApiKeyResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
