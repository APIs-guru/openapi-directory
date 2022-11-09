import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCommentXAmzTargetEnum {
    CodeCommit20150413GetComment = "CodeCommit_20150413.GetComment"
}


export class GetCommentHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCommentXAmzTargetEnum;
}


export class GetCommentRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetCommentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetCommentInput;
}


export class GetCommentResponse extends SpeakeasyBase {
  @Metadata()
  commentDeletedException?: any;

  @Metadata()
  commentDoesNotExistException?: any;

  @Metadata()
  commentIdRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  encryptionIntegrityChecksFailedException?: any;

  @Metadata()
  encryptionKeyAccessDeniedException?: any;

  @Metadata()
  encryptionKeyDisabledException?: any;

  @Metadata()
  encryptionKeyNotFoundException?: any;

  @Metadata()
  encryptionKeyUnavailableException?: any;

  @Metadata()
  getCommentOutput?: shared.GetCommentOutput;

  @Metadata()
  invalidCommentIdException?: any;

  @Metadata()
  statusCode: number;
}
