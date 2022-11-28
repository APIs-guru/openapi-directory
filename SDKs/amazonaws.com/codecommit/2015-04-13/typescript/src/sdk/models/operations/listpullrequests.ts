import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPullRequestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListPullRequestsXAmzTargetEnum {
    CodeCommit20150413ListPullRequests = "CodeCommit_20150413.ListPullRequests"
}


export class ListPullRequestsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListPullRequestsXAmzTargetEnum;
}


export class ListPullRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPullRequestsQueryParams;

  @SpeakeasyMetadata()
  headers: ListPullRequestsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListPullRequestsInput;
}


export class ListPullRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authorDoesNotExistException?: any;

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
  invalidAuthorArnException?: any;

  @SpeakeasyMetadata()
  invalidContinuationTokenException?: any;

  @SpeakeasyMetadata()
  invalidMaxResultsException?: any;

  @SpeakeasyMetadata()
  invalidPullRequestStatusException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryNameException?: any;

  @SpeakeasyMetadata()
  listPullRequestsOutput?: shared.ListPullRequestsOutput;

  @SpeakeasyMetadata()
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
