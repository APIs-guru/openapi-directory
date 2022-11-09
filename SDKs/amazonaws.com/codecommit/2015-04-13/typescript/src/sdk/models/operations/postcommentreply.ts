import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostCommentReplyXAmzTargetEnum {
    CodeCommit20150413PostCommentReply = "CodeCommit_20150413.PostCommentReply"
}


export class PostCommentReplyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PostCommentReplyXAmzTargetEnum;
}


export class PostCommentReplyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostCommentReplyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PostCommentReplyInput;
}


export class PostCommentReplyResponse extends SpeakeasyBase {
  @Metadata()
  clientRequestTokenRequiredException?: any;

  @Metadata()
  commentContentRequiredException?: any;

  @Metadata()
  commentContentSizeLimitExceededException?: any;

  @Metadata()
  commentDoesNotExistException?: any;

  @Metadata()
  commentIdRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  idempotencyParameterMismatchException?: any;

  @Metadata()
  invalidClientRequestTokenException?: any;

  @Metadata()
  invalidCommentIdException?: any;

  @Metadata()
  postCommentReplyOutput?: shared.PostCommentReplyOutput;

  @Metadata()
  statusCode: number;
}
