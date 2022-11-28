import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostCommentReplyXAmzTargetEnum {
    CodeCommit20150413PostCommentReply = "CodeCommit_20150413.PostCommentReply"
}


export class PostCommentReplyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PostCommentReplyXAmzTargetEnum;
}


export class PostCommentReplyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostCommentReplyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostCommentReplyInput;
}


export class PostCommentReplyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientRequestTokenRequiredException?: any;

  @SpeakeasyMetadata()
  commentContentRequiredException?: any;

  @SpeakeasyMetadata()
  commentContentSizeLimitExceededException?: any;

  @SpeakeasyMetadata()
  commentDoesNotExistException?: any;

  @SpeakeasyMetadata()
  commentIdRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  idempotencyParameterMismatchException?: any;

  @SpeakeasyMetadata()
  invalidClientRequestTokenException?: any;

  @SpeakeasyMetadata()
  invalidCommentIdException?: any;

  @SpeakeasyMetadata()
  postCommentReplyOutput?: shared.PostCommentReplyOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
