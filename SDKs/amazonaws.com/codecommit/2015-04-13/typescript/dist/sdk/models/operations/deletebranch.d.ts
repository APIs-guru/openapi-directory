import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBranchXAmzTargetEnum {
    CodeCommit20150413DeleteBranch = "CodeCommit_20150413.DeleteBranch"
}
export declare class DeleteBranchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBranchXAmzTargetEnum;
}
export declare class DeleteBranchRequest extends SpeakeasyBase {
    headers: DeleteBranchHeaders;
    request: shared.DeleteBranchInput;
}
export declare class DeleteBranchResponse extends SpeakeasyBase {
    branchNameRequiredException?: any;
    contentType: string;
    defaultBranchCannotBeDeletedException?: any;
    deleteBranchOutput?: shared.DeleteBranchOutput;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidBranchNameException?: any;
    invalidRepositoryNameException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
