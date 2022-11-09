import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteCommentContentXAmzTargetEnum {
    CodeCommit20150413DeleteCommentContent = "CodeCommit_20150413.DeleteCommentContent"
}


export class DeleteCommentContentHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteCommentContentXAmzTargetEnum;
}


export class DeleteCommentContentRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteCommentContentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteCommentContentInput;
}


export class DeleteCommentContentResponse extends SpeakeasyBase {
  @Metadata()
  commentDeletedException?: any;

  @Metadata()
  commentDoesNotExistException?: any;

  @Metadata()
  commentIdRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteCommentContentOutput?: shared.DeleteCommentContentOutput;

  @Metadata()
  invalidCommentIdException?: any;

  @Metadata()
  statusCode: number;
}
