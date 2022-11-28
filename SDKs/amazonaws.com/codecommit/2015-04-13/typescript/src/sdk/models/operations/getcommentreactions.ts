import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommentReactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetCommentReactionsXAmzTargetEnum {
    CodeCommit20150413GetCommentReactions = "CodeCommit_20150413.GetCommentReactions"
}


export class GetCommentReactionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCommentReactionsXAmzTargetEnum;
}


export class GetCommentReactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCommentReactionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetCommentReactionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetCommentReactionsInput;
}


export class GetCommentReactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentDeletedException?: any;

  @SpeakeasyMetadata()
  commentDoesNotExistException?: any;

  @SpeakeasyMetadata()
  commentIdRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCommentReactionsOutput?: shared.GetCommentReactionsOutput;

  @SpeakeasyMetadata()
  invalidCommentIdException?: any;

  @SpeakeasyMetadata()
  invalidContinuationTokenException?: any;

  @SpeakeasyMetadata()
  invalidMaxResultsException?: any;

  @SpeakeasyMetadata()
  invalidReactionUserArnException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
