import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutCommentReactionXAmzTargetEnum {
    CodeCommit20150413PutCommentReaction = "CodeCommit_20150413.PutCommentReaction"
}


export class PutCommentReactionHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutCommentReactionXAmzTargetEnum;
}


export class PutCommentReactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutCommentReactionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutCommentReactionInput;
}


export class PutCommentReactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentDeletedException?: any;

  @SpeakeasyMetadata()
  commentDoesNotExistException?: any;

  @SpeakeasyMetadata()
  commentIdRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidCommentIdException?: any;

  @SpeakeasyMetadata()
  invalidReactionValueException?: any;

  @SpeakeasyMetadata()
  reactionLimitExceededException?: any;

  @SpeakeasyMetadata()
  reactionValueRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
