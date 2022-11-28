import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFileXAmzTargetEnum {
    CodeCommit20150413GetFile = "CodeCommit_20150413.GetFile"
}
export declare class GetFileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFileXAmzTargetEnum;
}
export declare class GetFileRequest extends SpeakeasyBase {
    headers: GetFileHeaders;
    request: shared.GetFileInput;
}
export declare class GetFileResponse extends SpeakeasyBase {
    commitDoesNotExistException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    fileDoesNotExistException?: any;
    fileTooLargeException?: any;
    getFileOutput?: shared.GetFileOutput;
    invalidCommitException?: any;
    invalidPathException?: any;
    invalidRepositoryNameException?: any;
    pathRequiredException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
