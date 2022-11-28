import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePullRequestApprovalRuleXAmzTargetEnum {
    CodeCommit20150413CreatePullRequestApprovalRule = "CodeCommit_20150413.CreatePullRequestApprovalRule"
}
export declare class CreatePullRequestApprovalRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePullRequestApprovalRuleXAmzTargetEnum;
}
export declare class CreatePullRequestApprovalRuleRequest extends SpeakeasyBase {
    headers: CreatePullRequestApprovalRuleHeaders;
    request: shared.CreatePullRequestApprovalRuleInput;
}
export declare class CreatePullRequestApprovalRuleResponse extends SpeakeasyBase {
    approvalRuleContentRequiredException?: any;
    approvalRuleNameAlreadyExistsException?: any;
    approvalRuleNameRequiredException?: any;
    contentType: string;
    createPullRequestApprovalRuleOutput?: shared.CreatePullRequestApprovalRuleOutput;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidApprovalRuleContentException?: any;
    invalidApprovalRuleNameException?: any;
    invalidPullRequestIdException?: any;
    numberOfRulesExceededException?: any;
    pullRequestAlreadyClosedException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    statusCode: number;
}
