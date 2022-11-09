import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CompleteAttachmentUploadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzBearer: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CompleteAttachmentUploadRequestBody extends SpeakeasyBase {
    attachmentIds: string[];
    clientToken: string;
}
export declare class CompleteAttachmentUploadRequest extends SpeakeasyBase {
    headers: CompleteAttachmentUploadHeaders;
    request: CompleteAttachmentUploadRequestBody;
}
export declare class CompleteAttachmentUploadResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    completeAttachmentUploadResponse?: Map<string, any>;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
