import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteCommentContentXAmzTargetEnum {
    CodeCommit20150413DeleteCommentContent = "CodeCommit_20150413.DeleteCommentContent"
}


export class DeleteCommentContentHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteCommentContentXAmzTargetEnum;
}


export class DeleteCommentContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteCommentContentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteCommentContentInput;
}


export class DeleteCommentContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentDeletedException?: any;

  @SpeakeasyMetadata()
  commentDoesNotExistException?: any;

  @SpeakeasyMetadata()
  commentIdRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteCommentContentOutput?: shared.DeleteCommentContentOutput;

  @SpeakeasyMetadata()
  invalidCommentIdException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
