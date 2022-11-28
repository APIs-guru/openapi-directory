import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateBranchXAmzTargetEnum {
    CodeCommit20150413CreateBranch = "CodeCommit_20150413.CreateBranch"
}
export declare class CreateBranchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBranchXAmzTargetEnum;
}
export declare class CreateBranchRequest extends SpeakeasyBase {
    headers: CreateBranchHeaders;
    request: shared.CreateBranchInput;
}
export declare class CreateBranchResponse extends SpeakeasyBase {
    branchNameExistsException?: any;
    branchNameRequiredException?: any;
    commitDoesNotExistException?: any;
    commitIdRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidBranchNameException?: any;
    invalidCommitIdException?: any;
    invalidRepositoryNameException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
