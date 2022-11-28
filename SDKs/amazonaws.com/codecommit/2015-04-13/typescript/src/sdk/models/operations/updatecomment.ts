import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateCommentXAmzTargetEnum {
    CodeCommit20150413UpdateComment = "CodeCommit_20150413.UpdateComment"
}


export class UpdateCommentHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateCommentXAmzTargetEnum;
}


export class UpdateCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateCommentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCommentInput;
}


export class UpdateCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentContentRequiredException?: any;

  @SpeakeasyMetadata()
  commentContentSizeLimitExceededException?: any;

  @SpeakeasyMetadata()
  commentDeletedException?: any;

  @SpeakeasyMetadata()
  commentDoesNotExistException?: any;

  @SpeakeasyMetadata()
  commentIdRequiredException?: any;

  @SpeakeasyMetadata()
  commentNotCreatedByCallerException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidCommentIdException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCommentOutput?: shared.UpdateCommentOutput;
}
