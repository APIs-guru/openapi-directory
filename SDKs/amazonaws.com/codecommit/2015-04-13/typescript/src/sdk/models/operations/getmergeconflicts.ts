import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMergeConflictsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxConflictFiles" })
  maxConflictFiles?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetMergeConflictsXAmzTargetEnum {
    CodeCommit20150413GetMergeConflicts = "CodeCommit_20150413.GetMergeConflicts"
}


export class GetMergeConflictsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetMergeConflictsXAmzTargetEnum;
}


export class GetMergeConflictsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMergeConflictsQueryParams;

  @Metadata()
  headers: GetMergeConflictsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetMergeConflictsInput;
}


export class GetMergeConflictsResponse extends SpeakeasyBase {
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
  getMergeConflictsOutput?: shared.GetMergeConflictsOutput;

  @Metadata()
  invalidCommitException?: any;

  @Metadata()
  invalidConflictDetailLevelException?: any;

  @Metadata()
  invalidConflictResolutionStrategyException?: any;

  @Metadata()
  invalidContinuationTokenException?: any;

  @Metadata()
  invalidDestinationCommitSpecifierException?: any;

  @Metadata()
  invalidMaxConflictFilesException?: any;

  @Metadata()
  invalidMergeOptionException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  invalidSourceCommitSpecifierException?: any;

  @Metadata()
  maximumFileContentToLoadExceededException?: any;

  @Metadata()
  maximumItemsToCompareExceededException?: any;

  @Metadata()
  mergeOptionRequiredException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tipsDivergenceExceededException?: any;
}
