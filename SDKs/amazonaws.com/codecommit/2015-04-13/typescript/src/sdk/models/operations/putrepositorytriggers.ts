import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutRepositoryTriggersXAmzTargetEnum {
    CodeCommit20150413PutRepositoryTriggers = "CodeCommit_20150413.PutRepositoryTriggers"
}


export class PutRepositoryTriggersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: PutRepositoryTriggersXAmzTargetEnum;
}


export class PutRepositoryTriggersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutRepositoryTriggersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutRepositoryTriggersInput;
}


export class PutRepositoryTriggersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  encryptionIntegrityChecksFailedException?: any;

  @SpeakeasyMetadata()
  encryptionKeyAccessDeniedException?: any;

  @SpeakeasyMetadata()
  encryptionKeyDisabledException?: any;

  @SpeakeasyMetadata()
  encryptionKeyNotFoundException?: any;

  @SpeakeasyMetadata()
  encryptionKeyUnavailableException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryNameException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryTriggerBranchNameException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryTriggerCustomDataException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryTriggerDestinationArnException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryTriggerEventsException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryTriggerNameException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryTriggerRegionException?: any;

  @SpeakeasyMetadata()
  maximumBranchesExceededException?: any;

  @SpeakeasyMetadata()
  maximumRepositoryTriggersExceededException?: any;

  @SpeakeasyMetadata()
  putRepositoryTriggersOutput?: shared.PutRepositoryTriggersOutput;

  @SpeakeasyMetadata()
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  repositoryTriggerBranchNameListRequiredException?: any;

  @SpeakeasyMetadata()
  repositoryTriggerDestinationArnRequiredException?: any;

  @SpeakeasyMetadata()
  repositoryTriggerEventsListRequiredException?: any;

  @SpeakeasyMetadata()
  repositoryTriggerNameRequiredException?: any;

  @SpeakeasyMetadata()
  repositoryTriggersListRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
