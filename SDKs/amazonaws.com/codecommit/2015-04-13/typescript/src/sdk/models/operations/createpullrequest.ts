import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreatePullRequestXAmzTargetEnum {
    CodeCommit20150413CreatePullRequest = "CodeCommit_20150413.CreatePullRequest"
}


export class CreatePullRequestHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePullRequestXAmzTargetEnum;
}


export class CreatePullRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePullRequestHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreatePullRequestInput;
}


export class CreatePullRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientRequestTokenRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPullRequestOutput?: shared.CreatePullRequestOutput;

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
  idempotencyParameterMismatchException?: any;

  @SpeakeasyMetadata()
  invalidClientRequestTokenException?: any;

  @SpeakeasyMetadata()
  invalidDescriptionException?: any;

  @SpeakeasyMetadata()
  invalidReferenceNameException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryNameException?: any;

  @SpeakeasyMetadata()
  invalidTargetException?: any;

  @SpeakeasyMetadata()
  invalidTargetsException?: any;

  @SpeakeasyMetadata()
  invalidTitleException?: any;

  @SpeakeasyMetadata()
  maximumOpenPullRequestsExceededException?: any;

  @SpeakeasyMetadata()
  multipleRepositoriesInPullRequestException?: any;

  @SpeakeasyMetadata()
  referenceDoesNotExistException?: any;

  @SpeakeasyMetadata()
  referenceNameRequiredException?: any;

  @SpeakeasyMetadata()
  referenceTypeNotSupportedException?: any;

  @SpeakeasyMetadata()
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  sourceAndDestinationAreSameException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  targetRequiredException?: any;

  @SpeakeasyMetadata()
  targetsRequiredException?: any;

  @SpeakeasyMetadata()
  titleRequiredException?: any;
}
