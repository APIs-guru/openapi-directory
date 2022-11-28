import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFolderXAmzTargetEnum {
    CodeCommit20150413GetFolder = "CodeCommit_20150413.GetFolder"
}
export declare class GetFolderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFolderXAmzTargetEnum;
}
export declare class GetFolderRequest extends SpeakeasyBase {
    headers: GetFolderHeaders;
    request: shared.GetFolderInput;
}
export declare class GetFolderResponse extends SpeakeasyBase {
    commitDoesNotExistException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    folderDoesNotExistException?: any;
    getFolderOutput?: shared.GetFolderOutput;
    invalidCommitException?: any;
    invalidPathException?: any;
    invalidRepositoryNameException?: any;
    pathRequiredException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
