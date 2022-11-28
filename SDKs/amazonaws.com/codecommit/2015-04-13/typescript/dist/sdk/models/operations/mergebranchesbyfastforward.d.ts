import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MergeBranchesByFastForwardXAmzTargetEnum {
    CodeCommit20150413MergeBranchesByFastForward = "CodeCommit_20150413.MergeBranchesByFastForward"
}
export declare class MergeBranchesByFastForwardHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergeBranchesByFastForwardXAmzTargetEnum;
}
export declare class MergeBranchesByFastForwardRequest extends SpeakeasyBase {
    headers: MergeBranchesByFastForwardHeaders;
    request: shared.MergeBranchesByFastForwardInput;
}
export declare class MergeBranchesByFastForwardResponse extends SpeakeasyBase {
    branchDoesNotExistException?: any;
    branchNameIsTagNameException?: any;
    branchNameRequiredException?: any;
    commitDoesNotExistException?: any;
    commitRequiredException?: any;
    concurrentReferenceUpdateException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidBranchNameException?: any;
    invalidCommitException?: any;
    invalidRepositoryNameException?: any;
    invalidTargetBranchException?: any;
    manualMergeRequiredException?: any;
    mergeBranchesByFastForwardOutput?: shared.MergeBranchesByFastForwardOutput;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
    tipsDivergenceExceededException?: any;
}
