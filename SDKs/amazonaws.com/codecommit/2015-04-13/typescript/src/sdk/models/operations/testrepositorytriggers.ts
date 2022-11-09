import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TestRepositoryTriggersXAmzTargetEnum {
    CodeCommit20150413TestRepositoryTriggers = "CodeCommit_20150413.TestRepositoryTriggers"
}


export class TestRepositoryTriggersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: TestRepositoryTriggersXAmzTargetEnum;
}


export class TestRepositoryTriggersRequest extends SpeakeasyBase {
  @Metadata()
  headers: TestRepositoryTriggersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TestRepositoryTriggersInput;
}


export class TestRepositoryTriggersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  encryptionIntegrityChecksFailedException?: any;

  @Metadata()
  encryptionKeyAccessDeniedException?: any;

  @Metadata()
  encryptionKeyDisabledException?: any;

  @Metadata()
  encryptionKeyNotFoundException?: any;

  @Metadata()
  encryptionKeyUnavailableException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  invalidRepositoryTriggerBranchNameException?: any;

  @Metadata()
  invalidRepositoryTriggerCustomDataException?: any;

  @Metadata()
  invalidRepositoryTriggerDestinationArnException?: any;

  @Metadata()
  invalidRepositoryTriggerEventsException?: any;

  @Metadata()
  invalidRepositoryTriggerNameException?: any;

  @Metadata()
  invalidRepositoryTriggerRegionException?: any;

  @Metadata()
  maximumBranchesExceededException?: any;

  @Metadata()
  maximumRepositoryTriggersExceededException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  repositoryTriggerBranchNameListRequiredException?: any;

  @Metadata()
  repositoryTriggerDestinationArnRequiredException?: any;

  @Metadata()
  repositoryTriggerEventsListRequiredException?: any;

  @Metadata()
  repositoryTriggerNameRequiredException?: any;

  @Metadata()
  repositoryTriggersListRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  testRepositoryTriggersOutput?: shared.TestRepositoryTriggersOutput;
}
