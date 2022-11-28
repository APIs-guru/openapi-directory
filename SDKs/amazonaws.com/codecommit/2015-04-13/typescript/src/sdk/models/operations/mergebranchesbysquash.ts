import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum MergeBranchesBySquashXAmzTargetEnum {
    CodeCommit20150413MergeBranchesBySquash = "CodeCommit_20150413.MergeBranchesBySquash"
}


export class MergeBranchesBySquashHeaders extends SpeakeasyBase {
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
  xAmzTarget: MergeBranchesBySquashXAmzTargetEnum;
}


export class MergeBranchesBySquashRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: MergeBranchesBySquashHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MergeBranchesBySquashInput;
}


export class MergeBranchesBySquashResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  branchDoesNotExistException?: any;

  @SpeakeasyMetadata()
  branchNameIsTagNameException?: any;

  @SpeakeasyMetadata()
  branchNameRequiredException?: any;

  @SpeakeasyMetadata()
  commitDoesNotExistException?: any;

  @SpeakeasyMetadata()
  commitMessageLengthExceededException?: any;

  @SpeakeasyMetadata()
  commitRequiredException?: any;

  @SpeakeasyMetadata()
  concurrentReferenceUpdateException?: any;

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
  fileContentSizeLimitExceededException?: any;

  @SpeakeasyMetadata()
  fileModeRequiredException?: any;

  @SpeakeasyMetadata()
  folderContentSizeLimitExceededException?: any;

  @SpeakeasyMetadata()
  invalidBranchNameException?: any;

  @SpeakeasyMetadata()
  invalidCommitException?: any;

  @SpeakeasyMetadata()
  invalidConflictDetailLevelException?: any;

  @SpeakeasyMetadata()
  invalidConflictResolutionException?: any;

  @SpeakeasyMetadata()
  invalidConflictResolutionStrategyException?: any;

  @SpeakeasyMetadata()
  invalidEmailException?: any;

  @SpeakeasyMetadata()
  invalidFileModeException?: any;

  @SpeakeasyMetadata()
  invalidPathException?: any;

  @SpeakeasyMetadata()
  invalidReplacementContentException?: any;

  @SpeakeasyMetadata()
  invalidReplacementTypeException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryNameException?: any;

  @SpeakeasyMetadata()
  invalidTargetBranchException?: any;

  @SpeakeasyMetadata()
  manualMergeRequiredException?: any;

  @SpeakeasyMetadata()
  maximumConflictResolutionEntriesExceededException?: any;

  @SpeakeasyMetadata()
  maximumFileContentToLoadExceededException?: any;

  @SpeakeasyMetadata()
  maximumItemsToCompareExceededException?: any;

  @SpeakeasyMetadata()
  mergeBranchesBySquashOutput?: shared.MergeBranchesBySquashOutput;

  @SpeakeasyMetadata()
  multipleConflictResolutionEntriesException?: any;

  @SpeakeasyMetadata()
  nameLengthExceededException?: any;

  @SpeakeasyMetadata()
  pathRequiredException?: any;

  @SpeakeasyMetadata()
  replacementContentRequiredException?: any;

  @SpeakeasyMetadata()
  replacementTypeRequiredException?: any;

  @SpeakeasyMetadata()
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tipsDivergenceExceededException?: any;
}
