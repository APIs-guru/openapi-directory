import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePullRequestApprovalRuleXAmzTargetEnum {
    CodeCommit20150413DeletePullRequestApprovalRule = "CodeCommit_20150413.DeletePullRequestApprovalRule"
}
export declare class DeletePullRequestApprovalRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePullRequestApprovalRuleXAmzTargetEnum;
}
export declare class DeletePullRequestApprovalRuleRequest extends SpeakeasyBase {
    headers: DeletePullRequestApprovalRuleHeaders;
    request: shared.DeletePullRequestApprovalRuleInput;
}
export declare class DeletePullRequestApprovalRuleResponse extends SpeakeasyBase {
    approvalRuleNameRequiredException?: any;
    cannotDeleteApprovalRuleFromTemplateException?: any;
    contentType: string;
    deletePullRequestApprovalRuleOutput?: shared.DeletePullRequestApprovalRuleOutput;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidApprovalRuleNameException?: any;
    invalidPullRequestIdException?: any;
    pullRequestAlreadyClosedException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    statusCode: number;
}
