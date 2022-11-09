import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommentsForPullRequestQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetCommentsForPullRequestXAmzTargetEnum {
    CodeCommit20150413GetCommentsForPullRequest = "CodeCommit_20150413.GetCommentsForPullRequest"
}


export class GetCommentsForPullRequestHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCommentsForPullRequestXAmzTargetEnum;
}


export class GetCommentsForPullRequestRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommentsForPullRequestQueryParams;

  @Metadata()
  headers: GetCommentsForPullRequestHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetCommentsForPullRequestInput;
}


export class GetCommentsForPullRequestResponse extends SpeakeasyBase {
  @Metadata()
  commitDoesNotExistException?: any;

  @Metadata()
  commitIdRequiredException?: any;

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
  getCommentsForPullRequestOutput?: shared.GetCommentsForPullRequestOutput;

  @Metadata()
  invalidCommitIdException?: any;

  @Metadata()
  invalidContinuationTokenException?: any;

  @Metadata()
  invalidMaxResultsException?: any;

  @Metadata()
  invalidPullRequestIdException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  repositoryNotAssociatedWithPullRequestException?: any;

  @Metadata()
  statusCode: number;
}
