import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommentsForPullRequestQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetCommentsForPullRequestXAmzTargetEnum {
    CodeCommit20150413GetCommentsForPullRequest = "CodeCommit_20150413.GetCommentsForPullRequest"
}


export class GetCommentsForPullRequestHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCommentsForPullRequestXAmzTargetEnum;
}


export class GetCommentsForPullRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCommentsForPullRequestQueryParams;

  @SpeakeasyMetadata()
  headers: GetCommentsForPullRequestHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetCommentsForPullRequestInput;
}


export class GetCommentsForPullRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commitDoesNotExistException?: any;

  @SpeakeasyMetadata()
  commitIdRequiredException?: any;

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
  getCommentsForPullRequestOutput?: shared.GetCommentsForPullRequestOutput;

  @SpeakeasyMetadata()
  invalidCommitIdException?: any;

  @SpeakeasyMetadata()
  invalidContinuationTokenException?: any;

  @SpeakeasyMetadata()
  invalidMaxResultsException?: any;

  @SpeakeasyMetadata()
  invalidPullRequestIdException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryNameException?: any;

  @SpeakeasyMetadata()
  pullRequestDoesNotExistException?: any;

  @SpeakeasyMetadata()
  pullRequestIdRequiredException?: any;

  @SpeakeasyMetadata()
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  repositoryNotAssociatedWithPullRequestException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
