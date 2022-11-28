import { SpeakeasyBase } from "../../../internal/utils";
export declare class InitiateMultipartUploadPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class InitiateMultipartUploadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzArchiveDescription?: string;
    xAmzPartSize?: string;
}
export declare class InitiateMultipartUploadRequest extends SpeakeasyBase {
    pathParams: InitiateMultipartUploadPathParams;
    headers: InitiateMultipartUploadHeaders;
}
export declare class InitiateMultipartUploadResponse extends SpeakeasyBase {
    contentType: string;
    initiateMultipartUploadOutput?: Map<string, any>;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
