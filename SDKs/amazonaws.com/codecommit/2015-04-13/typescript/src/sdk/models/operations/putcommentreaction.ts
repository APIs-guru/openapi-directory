import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutCommentReactionXAmzTargetEnum {
    CodeCommit20150413PutCommentReaction = "CodeCommit_20150413.PutCommentReaction"
}


export class PutCommentReactionHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutCommentReactionXAmzTargetEnum;
}


export class PutCommentReactionRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutCommentReactionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutCommentReactionInput;
}


export class PutCommentReactionResponse extends SpeakeasyBase {
  @Metadata()
  commentDeletedException?: any;

  @Metadata()
  commentDoesNotExistException?: any;

  @Metadata()
  commentIdRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidCommentIdException?: any;

  @Metadata()
  invalidReactionValueException?: any;

  @Metadata()
  reactionLimitExceededException?: any;

  @Metadata()
  reactionValueRequiredException?: any;

  @Metadata()
  statusCode: number;
}
