import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBranchXAmzTargetEnum {
    CodeCommit20150413GetBranch = "CodeCommit_20150413.GetBranch"
}
export declare class GetBranchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBranchXAmzTargetEnum;
}
export declare class GetBranchRequest extends SpeakeasyBase {
    headers: GetBranchHeaders;
    request: shared.GetBranchInput;
}
export declare class GetBranchResponse extends SpeakeasyBase {
    branchDoesNotExistException?: any;
    branchNameRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getBranchOutput?: shared.GetBranchOutput;
    invalidBranchNameException?: any;
    invalidRepositoryNameException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
