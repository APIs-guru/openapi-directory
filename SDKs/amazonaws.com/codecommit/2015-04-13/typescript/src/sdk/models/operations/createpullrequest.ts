import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePullRequestXAmzTargetEnum {
    CodeCommit20150413CreatePullRequest = "CodeCommit_20150413.CreatePullRequest"
}


export class CreatePullRequestHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePullRequestXAmzTargetEnum;
}


export class CreatePullRequestRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePullRequestHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePullRequestInput;
}


export class CreatePullRequestResponse extends SpeakeasyBase {
  @Metadata()
  clientRequestTokenRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createPullRequestOutput?: shared.CreatePullRequestOutput;

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
  idempotencyParameterMismatchException?: any;

  @Metadata()
  invalidClientRequestTokenException?: any;

  @Metadata()
  invalidDescriptionException?: any;

  @Metadata()
  invalidReferenceNameException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  invalidTargetException?: any;

  @Metadata()
  invalidTargetsException?: any;

  @Metadata()
  invalidTitleException?: any;

  @Metadata()
  maximumOpenPullRequestsExceededException?: any;

  @Metadata()
  multipleRepositoriesInPullRequestException?: any;

  @Metadata()
  referenceDoesNotExistException?: any;

  @Metadata()
  referenceNameRequiredException?: any;

  @Metadata()
  referenceTypeNotSupportedException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  sourceAndDestinationAreSameException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  targetRequiredException?: any;

  @Metadata()
  targetsRequiredException?: any;

  @Metadata()
  titleRequiredException?: any;
}
