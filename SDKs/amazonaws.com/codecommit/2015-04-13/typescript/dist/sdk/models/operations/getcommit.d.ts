import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCommitXAmzTargetEnum {
    CodeCommit20150413GetCommit = "CodeCommit_20150413.GetCommit"
}
export declare class GetCommitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCommitXAmzTargetEnum;
}
export declare class GetCommitRequest extends SpeakeasyBase {
    headers: GetCommitHeaders;
    request: shared.GetCommitInput;
}
export declare class GetCommitResponse extends SpeakeasyBase {
    commitIdDoesNotExistException?: any;
    commitIdRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getCommitOutput?: shared.GetCommitOutput;
    invalidCommitIdException?: any;
    invalidRepositoryNameException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
