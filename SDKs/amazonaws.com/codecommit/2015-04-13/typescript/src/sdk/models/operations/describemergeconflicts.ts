import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeMergeConflictsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxMergeHunks" })
  maxMergeHunks?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeMergeConflictsXAmzTargetEnum {
    CodeCommit20150413DescribeMergeConflicts = "CodeCommit_20150413.DescribeMergeConflicts"
}


export class DescribeMergeConflictsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMergeConflictsXAmzTargetEnum;
}


export class DescribeMergeConflictsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeMergeConflictsQueryParams;

  @Metadata()
  headers: DescribeMergeConflictsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeMergeConflictsInput;
}


export class DescribeMergeConflictsResponse extends SpeakeasyBase {
  @Metadata()
  commitDoesNotExistException?: any;

  @Metadata()
  commitRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeMergeConflictsOutput?: shared.DescribeMergeConflictsOutput;

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
  fileDoesNotExistException?: any;

  @Metadata()
  invalidCommitException?: any;

  @Metadata()
  invalidConflictDetailLevelException?: any;

  @Metadata()
  invalidConflictResolutionStrategyException?: any;

  @Metadata()
  invalidContinuationTokenException?: any;

  @Metadata()
  invalidMaxMergeHunksException?: any;

  @Metadata()
  invalidMergeOptionException?: any;

  @Metadata()
  invalidPathException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  maximumFileContentToLoadExceededException?: any;

  @Metadata()
  maximumItemsToCompareExceededException?: any;

  @Metadata()
  mergeOptionRequiredException?: any;

  @Metadata()
  pathRequiredException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tipsDivergenceExceededException?: any;
}
