import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommentReactionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetCommentReactionsXAmzTargetEnum {
    CodeCommit20150413GetCommentReactions = "CodeCommit_20150413.GetCommentReactions"
}


export class GetCommentReactionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCommentReactionsXAmzTargetEnum;
}


export class GetCommentReactionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommentReactionsQueryParams;

  @Metadata()
  headers: GetCommentReactionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetCommentReactionsInput;
}


export class GetCommentReactionsResponse extends SpeakeasyBase {
  @Metadata()
  commentDeletedException?: any;

  @Metadata()
  commentDoesNotExistException?: any;

  @Metadata()
  commentIdRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getCommentReactionsOutput?: shared.GetCommentReactionsOutput;

  @Metadata()
  invalidCommentIdException?: any;

  @Metadata()
  invalidContinuationTokenException?: any;

  @Metadata()
  invalidMaxResultsException?: any;

  @Metadata()
  invalidReactionUserArnException?: any;

  @Metadata()
  statusCode: number;
}
