import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateCommentXAmzTargetEnum {
    CodeCommit20150413UpdateComment = "CodeCommit_20150413.UpdateComment"
}


export class UpdateCommentHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateCommentXAmzTargetEnum;
}


export class UpdateCommentRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateCommentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCommentInput;
}


export class UpdateCommentResponse extends SpeakeasyBase {
  @Metadata()
  commentContentRequiredException?: any;

  @Metadata()
  commentContentSizeLimitExceededException?: any;

  @Metadata()
  commentDeletedException?: any;

  @Metadata()
  commentDoesNotExistException?: any;

  @Metadata()
  commentIdRequiredException?: any;

  @Metadata()
  commentNotCreatedByCallerException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidCommentIdException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCommentOutput?: shared.UpdateCommentOutput;
}
