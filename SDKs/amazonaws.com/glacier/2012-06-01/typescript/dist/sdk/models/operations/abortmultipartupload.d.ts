import { SpeakeasyBase } from "../../../internal/utils";
export declare class AbortMultipartUploadPathParams extends SpeakeasyBase {
    accountId: string;
    uploadId: string;
    vaultName: string;
}
export declare class AbortMultipartUploadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AbortMultipartUploadRequest extends SpeakeasyBase {
    pathParams: AbortMultipartUploadPathParams;
    headers: AbortMultipartUploadHeaders;
}
export declare class AbortMultipartUploadResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
