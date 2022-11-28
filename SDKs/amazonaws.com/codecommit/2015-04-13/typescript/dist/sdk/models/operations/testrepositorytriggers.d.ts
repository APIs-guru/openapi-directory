import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TestRepositoryTriggersXAmzTargetEnum {
    CodeCommit20150413TestRepositoryTriggers = "CodeCommit_20150413.TestRepositoryTriggers"
}
export declare class TestRepositoryTriggersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestRepositoryTriggersXAmzTargetEnum;
}
export declare class TestRepositoryTriggersRequest extends SpeakeasyBase {
    headers: TestRepositoryTriggersHeaders;
    request: shared.TestRepositoryTriggersInput;
}
export declare class TestRepositoryTriggersResponse extends SpeakeasyBase {
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
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    repositoryTriggerBranchNameListRequiredException?: any;
    repositoryTriggerDestinationArnRequiredException?: any;
    repositoryTriggerEventsListRequiredException?: any;
    repositoryTriggerNameRequiredException?: any;
    repositoryTriggersListRequiredException?: any;
    statusCode: number;
    testRepositoryTriggersOutput?: shared.TestRepositoryTriggersOutput;
}
