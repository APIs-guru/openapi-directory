import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutRepositoryTriggersXAmzTargetEnum {
    CodeCommit20150413PutRepositoryTriggers = "CodeCommit_20150413.PutRepositoryTriggers"
}
export declare class PutRepositoryTriggersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRepositoryTriggersXAmzTargetEnum;
}
export declare class PutRepositoryTriggersRequest extends SpeakeasyBase {
    headers: PutRepositoryTriggersHeaders;
    request: shared.PutRepositoryTriggersInput;
}
export declare class PutRepositoryTriggersResponse extends SpeakeasyBase {
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidRepositoryNameException?: any;
    invalidRepositoryTriggerBranchNameException?: any;
    invalidRepositoryTriggerCustomDataException?: any;
    invalidRepositoryTriggerDestinationArnException?: any;
    invalidRepositoryTriggerEventsException?: any;
    invalidRepositoryTriggerNameException?: any;
    invalidRepositoryTriggerRegionException?: any;
    maximumBranchesExceededException?: any;
    maximumRepositoryTriggersExceededException?: any;
    putRepositoryTriggersOutput?: shared.PutRepositoryTriggersOutput;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    repositoryTriggerBranchNameListRequiredException?: any;
    repositoryTriggerDestinationArnRequiredException?: any;
    repositoryTriggerEventsListRequiredException?: any;
    repositoryTriggerNameRequiredException?: any;
    repositoryTriggersListRequiredException?: any;
    statusCode: number;
}
