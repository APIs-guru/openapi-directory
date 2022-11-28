import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostCommentForComparedCommitXAmzTargetEnum {
    CodeCommit20150413PostCommentForComparedCommit = "CodeCommit_20150413.PostCommentForComparedCommit"
}


export class PostCommentForComparedCommitHeaders extends SpeakeasyBase {
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
  xAmzTarget: PostCommentForComparedCommitXAmzTargetEnum;
}


export class PostCommentForComparedCommitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostCommentForComparedCommitHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostCommentForComparedCommitInput;
}


export class PostCommentForComparedCommitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beforeCommitIdAndAfterCommitIdAreSameException?: any;

  @SpeakeasyMetadata()
  clientRequestTokenRequiredException?: any;

  @SpeakeasyMetadata()
  commentContentRequiredException?: any;

  @SpeakeasyMetadata()
  commentContentSizeLimitExceededException?: any;

  @SpeakeasyMetadata()
  commitDoesNotExistException?: any;

  @SpeakeasyMetadata()
  commitIdRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  encryptionIntegrityChecksFailedException?: any;

  @SpeakeasyMetadata()
  encryptionKeyAccessDeniedException?: any;

  @SpeakeasyMetadata()
  encryptionKeyDisabledException?: any;

  @SpeakeasyMetadata()
  encryptionKeyNotFoundException?: any;

  @SpeakeasyMetadata()
  encryptionKeyUnavailableException?: any;

  @SpeakeasyMetadata()
  idempotencyParameterMismatchException?: any;

  @SpeakeasyMetadata()
  invalidClientRequestTokenException?: any;

  @SpeakeasyMetadata()
  invalidCommitIdException?: any;

  @SpeakeasyMetadata()
  invalidFileLocationException?: any;

  @SpeakeasyMetadata()
  invalidFilePositionException?: any;

  @SpeakeasyMetadata()
  invalidPathException?: any;

  @SpeakeasyMetadata()
  invalidRelativeFileVersionEnumException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryNameException?: any;

  @SpeakeasyMetadata()
  pathDoesNotExistException?: any;

  @SpeakeasyMetadata()
  pathRequiredException?: any;

  @SpeakeasyMetadata()
  postCommentForComparedCommitOutput?: shared.PostCommentForComparedCommitOutput;

  @SpeakeasyMetadata()
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
