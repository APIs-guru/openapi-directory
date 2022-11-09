import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StartAttachmentUploadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzBearer: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartAttachmentUploadRequestBody extends SpeakeasyBase {
    attachmentName: string;
    attachmentSizeInBytes: number;
    clientToken: string;
    contentType: string;
}
export declare class StartAttachmentUploadRequest extends SpeakeasyBase {
    headers: StartAttachmentUploadHeaders;
    request: StartAttachmentUploadRequestBody;
}
export declare class StartAttachmentUploadResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    startAttachmentUploadResponse?: shared.StartAttachmentUploadResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
