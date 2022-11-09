import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommentsForComparedCommitQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetCommentsForComparedCommitXAmzTargetEnum {
    CodeCommit20150413GetCommentsForComparedCommit = "CodeCommit_20150413.GetCommentsForComparedCommit"
}


export class GetCommentsForComparedCommitHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCommentsForComparedCommitXAmzTargetEnum;
}


export class GetCommentsForComparedCommitRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommentsForComparedCommitQueryParams;

  @Metadata()
  headers: GetCommentsForComparedCommitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetCommentsForComparedCommitInput;
}


export class GetCommentsForComparedCommitResponse extends SpeakeasyBase {
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
  getCommentsForComparedCommitOutput?: shared.GetCommentsForComparedCommitOutput;

  @Metadata()
  invalidCommitIdException?: any;

  @Metadata()
  invalidContinuationTokenException?: any;

  @Metadata()
  invalidMaxResultsException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;
}
