import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeMergeConflictsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxMergeHunks" })
  maxMergeHunks?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeMergeConflictsXAmzTargetEnum {
    CodeCommit20150413DescribeMergeConflicts = "CodeCommit_20150413.DescribeMergeConflicts"
}


export class DescribeMergeConflictsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMergeConflictsXAmzTargetEnum;
}


export class DescribeMergeConflictsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeMergeConflictsQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeMergeConflictsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeMergeConflictsInput;
}


export class DescribeMergeConflictsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commitDoesNotExistException?: any;

  @SpeakeasyMetadata()
  commitRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeMergeConflictsOutput?: shared.DescribeMergeConflictsOutput;

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
  fileDoesNotExistException?: any;

  @SpeakeasyMetadata()
  invalidCommitException?: any;

  @SpeakeasyMetadata()
  invalidConflictDetailLevelException?: any;

  @SpeakeasyMetadata()
  invalidConflictResolutionStrategyException?: any;

  @SpeakeasyMetadata()
  invalidContinuationTokenException?: any;

  @SpeakeasyMetadata()
  invalidMaxMergeHunksException?: any;

  @SpeakeasyMetadata()
  invalidMergeOptionException?: any;

  @SpeakeasyMetadata()
  invalidPathException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryNameException?: any;

  @SpeakeasyMetadata()
  maximumFileContentToLoadExceededException?: any;

  @SpeakeasyMetadata()
  maximumItemsToCompareExceededException?: any;

  @SpeakeasyMetadata()
  mergeOptionRequiredException?: any;

  @SpeakeasyMetadata()
  pathRequiredException?: any;

  @SpeakeasyMetadata()
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tipsDivergenceExceededException?: any;
}
