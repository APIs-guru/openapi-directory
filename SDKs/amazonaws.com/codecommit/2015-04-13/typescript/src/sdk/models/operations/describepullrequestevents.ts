import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribePullRequestEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribePullRequestEventsXAmzTargetEnum {
    CodeCommit20150413DescribePullRequestEvents = "CodeCommit_20150413.DescribePullRequestEvents"
}


export class DescribePullRequestEventsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePullRequestEventsXAmzTargetEnum;
}


export class DescribePullRequestEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribePullRequestEventsQueryParams;

  @Metadata()
  headers: DescribePullRequestEventsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePullRequestEventsInput;
}


export class DescribePullRequestEventsResponse extends SpeakeasyBase {
  @Metadata()
  actorDoesNotExistException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describePullRequestEventsOutput?: shared.DescribePullRequestEventsOutput;

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
  invalidActorArnException?: any;

  @Metadata()
  invalidContinuationTokenException?: any;

  @Metadata()
  invalidMaxResultsException?: any;

  @Metadata()
  invalidPullRequestEventTypeException?: any;

  @Metadata()
  invalidPullRequestIdException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  statusCode: number;
}
