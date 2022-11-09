import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetMergeCommitXAmzTargetEnum {
    CodeCommit20150413GetMergeCommit = "CodeCommit_20150413.GetMergeCommit"
}


export class GetMergeCommitHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetMergeCommitXAmzTargetEnum;
}


export class GetMergeCommitRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetMergeCommitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetMergeCommitInput;
}


export class GetMergeCommitResponse extends SpeakeasyBase {
  @Metadata()
  commitDoesNotExistException?: any;

  @Metadata()
  commitRequiredException?: any;

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
  getMergeCommitOutput?: shared.GetMergeCommitOutput;

  @Metadata()
  invalidCommitException?: any;

  @Metadata()
  invalidConflictDetailLevelException?: any;

  @Metadata()
  invalidConflictResolutionStrategyException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;
}
