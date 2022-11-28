import { SpeakeasyBase } from "../../../internal/utils";
export declare class UploadArchivePathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class UploadArchiveHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzArchiveDescription?: string;
    xAmzSha256TreeHash?: string;
}
export declare class UploadArchiveRequestBody extends SpeakeasyBase {
    body?: string;
}
export declare class UploadArchiveRequest extends SpeakeasyBase {
    pathParams: UploadArchivePathParams;
    headers: UploadArchiveHeaders;
    request: UploadArchiveRequestBody;
}
export declare class UploadArchiveResponse extends SpeakeasyBase {
    archiveCreationOutput?: Map<string, any>;
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    requestTimeoutException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
