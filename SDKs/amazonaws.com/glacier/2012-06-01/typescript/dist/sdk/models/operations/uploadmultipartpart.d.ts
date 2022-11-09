import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UploadMultipartPartPathParams extends SpeakeasyBase {
    accountId: string;
    uploadId: string;
    vaultName: string;
}
export declare class UploadMultipartPartHeaders extends SpeakeasyBase {
    contentRange?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzSha256TreeHash?: string;
}
export declare class UploadMultipartPartRequestBody extends SpeakeasyBase {
    body?: string;
}
export declare class UploadMultipartPartRequest extends SpeakeasyBase {
    pathParams: UploadMultipartPartPathParams;
    headers: UploadMultipartPartHeaders;
    request: UploadMultipartPartRequestBody;
}
export declare class UploadMultipartPartResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    requestTimeoutException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    uploadMultipartPartOutput?: Map<string, any>;
}
