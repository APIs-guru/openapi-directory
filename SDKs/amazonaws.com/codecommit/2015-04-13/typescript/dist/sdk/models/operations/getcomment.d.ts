import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCommentXAmzTargetEnum {
    CodeCommit20150413GetComment = "CodeCommit_20150413.GetComment"
}
export declare class GetCommentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCommentXAmzTargetEnum;
}
export declare class GetCommentRequest extends SpeakeasyBase {
    headers: GetCommentHeaders;
    request: shared.GetCommentInput;
}
export declare class GetCommentResponse extends SpeakeasyBase {
    commentDeletedException?: any;
    commentDoesNotExistException?: any;
    commentIdRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getCommentOutput?: shared.GetCommentOutput;
    invalidCommentIdException?: any;
    statusCode: number;
}
