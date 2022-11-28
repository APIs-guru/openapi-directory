import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePullRequestApprovalRuleContentXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestApprovalRuleContent = "CodeCommit_20150413.UpdatePullRequestApprovalRuleContent"
}
export declare class UpdatePullRequestApprovalRuleContentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePullRequestApprovalRuleContentXAmzTargetEnum;
}
export declare class UpdatePullRequestApprovalRuleContentRequest extends SpeakeasyBase {
    headers: UpdatePullRequestApprovalRuleContentHeaders;
    request: shared.UpdatePullRequestApprovalRuleContentInput;
}
export declare class UpdatePullRequestApprovalRuleContentResponse extends SpeakeasyBase {
    approvalRuleContentRequiredException?: any;
    approvalRuleDoesNotExistException?: any;
    approvalRuleNameRequiredException?: any;
    cannotModifyApprovalRuleFromTemplateException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidApprovalRuleContentException?: any;
    invalidApprovalRuleNameException?: any;
    invalidPullRequestIdException?: any;
    invalidRuleContentSha256Exception?: any;
    pullRequestAlreadyClosedException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    statusCode: number;
    updatePullRequestApprovalRuleContentOutput?: shared.UpdatePullRequestApprovalRuleContentOutput;
}
