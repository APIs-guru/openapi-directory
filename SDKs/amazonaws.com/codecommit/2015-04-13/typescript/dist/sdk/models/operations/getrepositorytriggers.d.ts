import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRepositoryTriggersXAmzTargetEnum {
    CodeCommit20150413GetRepositoryTriggers = "CodeCommit_20150413.GetRepositoryTriggers"
}
export declare class GetRepositoryTriggersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRepositoryTriggersXAmzTargetEnum;
}
export declare class GetRepositoryTriggersRequest extends SpeakeasyBase {
    headers: GetRepositoryTriggersHeaders;
    request: shared.GetRepositoryTriggersInput;
}
export declare class GetRepositoryTriggersResponse extends SpeakeasyBase {
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getRepositoryTriggersOutput?: shared.GetRepositoryTriggersOutput;
    invalidRepositoryNameException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
