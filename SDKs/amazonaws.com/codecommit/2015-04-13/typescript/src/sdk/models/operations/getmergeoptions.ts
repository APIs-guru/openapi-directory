import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetMergeOptionsXAmzTargetEnum {
    CodeCommit20150413GetMergeOptions = "CodeCommit_20150413.GetMergeOptions"
}


export class GetMergeOptionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetMergeOptionsXAmzTargetEnum;
}


export class GetMergeOptionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetMergeOptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetMergeOptionsInput;
}


export class GetMergeOptionsResponse extends SpeakeasyBase {
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
  getMergeOptionsOutput?: shared.GetMergeOptionsOutput;

  @Metadata()
  invalidCommitException?: any;

  @Metadata()
  invalidConflictDetailLevelException?: any;

  @Metadata()
  invalidConflictResolutionStrategyException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  maximumFileContentToLoadExceededException?: any;

  @Metadata()
  maximumItemsToCompareExceededException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tipsDivergenceExceededException?: any;
}
