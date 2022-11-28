import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBlobXAmzTargetEnum {
    CodeCommit20150413GetBlob = "CodeCommit_20150413.GetBlob"
}
export declare class GetBlobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBlobXAmzTargetEnum;
}
export declare class GetBlobRequest extends SpeakeasyBase {
    headers: GetBlobHeaders;
    request: shared.GetBlobInput;
}
export declare class GetBlobResponse extends SpeakeasyBase {
    blobIdDoesNotExistException?: any;
    blobIdRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    fileTooLargeException?: any;
    getBlobOutput?: shared.GetBlobOutput;
    invalidBlobIdException?: any;
    invalidRepositoryNameException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
