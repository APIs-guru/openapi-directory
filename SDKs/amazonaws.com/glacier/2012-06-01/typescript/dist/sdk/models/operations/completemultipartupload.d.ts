import { SpeakeasyBase } from "../../../internal/utils";
export declare class CompleteMultipartUploadPathParams extends SpeakeasyBase {
    accountId: string;
    uploadId: string;
    vaultName: string;
}
export declare class CompleteMultipartUploadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzArchiveSize?: string;
    xAmzSha256TreeHash?: string;
}
export declare class CompleteMultipartUploadRequest extends SpeakeasyBase {
    pathParams: CompleteMultipartUploadPathParams;
    headers: CompleteMultipartUploadHeaders;
}
export declare class CompleteMultipartUploadResponse extends SpeakeasyBase {
    archiveCreationOutput?: Map<string, any>;
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
