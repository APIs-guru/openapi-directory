import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostCommentForComparedCommitXAmzTargetEnum {
    CodeCommit20150413PostCommentForComparedCommit = "CodeCommit_20150413.PostCommentForComparedCommit"
}


export class PostCommentForComparedCommitHeaders extends SpeakeasyBase {
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
  xAmzTarget: PostCommentForComparedCommitXAmzTargetEnum;
}


export class PostCommentForComparedCommitRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostCommentForComparedCommitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PostCommentForComparedCommitInput;
}


export class PostCommentForComparedCommitResponse extends SpeakeasyBase {
  @Metadata()
  beforeCommitIdAndAfterCommitIdAreSameException?: any;

  @Metadata()
  clientRequestTokenRequiredException?: any;

  @Metadata()
  commentContentRequiredException?: any;

  @Metadata()
  commentContentSizeLimitExceededException?: any;

  @Metadata()
  commitDoesNotExistException?: any;

  @Metadata()
  commitIdRequiredException?: any;

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
  idempotencyParameterMismatchException?: any;

  @Metadata()
  invalidClientRequestTokenException?: any;

  @Metadata()
  invalidCommitIdException?: any;

  @Metadata()
  invalidFileLocationException?: any;

  @Metadata()
  invalidFilePositionException?: any;

  @Metadata()
  invalidPathException?: any;

  @Metadata()
  invalidRelativeFileVersionEnumException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  pathDoesNotExistException?: any;

  @Metadata()
  pathRequiredException?: any;

  @Metadata()
  postCommentForComparedCommitOutput?: shared.PostCommentForComparedCommitOutput;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;
}
