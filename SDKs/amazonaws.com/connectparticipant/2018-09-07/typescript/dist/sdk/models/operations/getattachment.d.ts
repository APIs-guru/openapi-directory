import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzBearer: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachmentRequestBody extends SpeakeasyBase {
    attachmentId: string;
}
export declare class GetAttachmentRequest extends SpeakeasyBase {
    headers: GetAttachmentHeaders;
    request: GetAttachmentRequestBody;
}
export declare class GetAttachmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAttachmentResponse?: shared.GetAttachmentResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
