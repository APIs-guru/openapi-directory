import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDefaultBranchXAmzTargetEnum {
    CodeCommit20150413UpdateDefaultBranch = "CodeCommit_20150413.UpdateDefaultBranch"
}
export declare class UpdateDefaultBranchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDefaultBranchXAmzTargetEnum;
}
export declare class UpdateDefaultBranchRequest extends SpeakeasyBase {
    headers: UpdateDefaultBranchHeaders;
    request: shared.UpdateDefaultBranchInput;
}
export declare class UpdateDefaultBranchResponse extends SpeakeasyBase {
    branchDoesNotExistException?: any;
    branchNameRequiredException?: any;
    contentType: string;
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
