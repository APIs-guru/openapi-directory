import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMergeConflictsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxConflictFiles" })
  maxConflictFiles?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetMergeConflictsXAmzTargetEnum {
    CodeCommit20150413GetMergeConflicts = "CodeCommit_20150413.GetMergeConflicts"
}


export class GetMergeConflictsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetMergeConflictsXAmzTargetEnum;
}


export class GetMergeConflictsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMergeConflictsQueryParams;

  @SpeakeasyMetadata()
  headers: GetMergeConflictsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetMergeConflictsInput;
}


export class GetMergeConflictsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commitDoesNotExistException?: any;

  @SpeakeasyMetadata()
  commitRequiredException?: any;

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
  getMergeConflictsOutput?: shared.GetMergeConflictsOutput;

  @SpeakeasyMetadata()
  invalidCommitException?: any;

  @SpeakeasyMetadata()
  invalidConflictDetailLevelException?: any;

  @SpeakeasyMetadata()
  invalidConflictResolutionStrategyException?: any;

  @SpeakeasyMetadata()
  invalidContinuationTokenException?: any;

  @SpeakeasyMetadata()
  invalidDestinationCommitSpecifierException?: any;

  @SpeakeasyMetadata()
  invalidMaxConflictFilesException?: any;

  @SpeakeasyMetadata()
  invalidMergeOptionException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryNameException?: any;

  @SpeakeasyMetadata()
  invalidSourceCommitSpecifierException?: any;

  @SpeakeasyMetadata()
  maximumFileContentToLoadExceededException?: any;

  @SpeakeasyMetadata()
  maximumItemsToCompareExceededException?: any;

  @SpeakeasyMetadata()
  mergeOptionRequiredException?: any;

  @SpeakeasyMetadata()
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tipsDivergenceExceededException?: any;
}
