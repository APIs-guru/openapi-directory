import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum OverridePullRequestApprovalRulesXAmzTargetEnum {
    CodeCommit20150413OverridePullRequestApprovalRules = "CodeCommit_20150413.OverridePullRequestApprovalRules"
}
export declare class OverridePullRequestApprovalRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: OverridePullRequestApprovalRulesXAmzTargetEnum;
}
export declare class OverridePullRequestApprovalRulesRequest extends SpeakeasyBase {
    headers: OverridePullRequestApprovalRulesHeaders;
    request: shared.OverridePullRequestApprovalRulesInput;
}
export declare class OverridePullRequestApprovalRulesResponse extends SpeakeasyBase {
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidOverrideStatusException?: any;
    invalidPullRequestIdException?: any;
    invalidRevisionIdException?: any;
    overrideAlreadySetException?: any;
    overrideStatusRequiredException?: any;
    pullRequestAlreadyClosedException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    revisionIdRequiredException?: any;
    revisionNotCurrentException?: any;
    statusCode: number;
}
