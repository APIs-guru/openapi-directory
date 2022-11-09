import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum MergeBranchesByThreeWayXAmzTargetEnum {
    CodeCommit20150413MergeBranchesByThreeWay = "CodeCommit_20150413.MergeBranchesByThreeWay"
}


export class MergeBranchesByThreeWayHeaders extends SpeakeasyBase {
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
  xAmzTarget: MergeBranchesByThreeWayXAmzTargetEnum;
}


export class MergeBranchesByThreeWayRequest extends SpeakeasyBase {
  @Metadata()
  headers: MergeBranchesByThreeWayHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MergeBranchesByThreeWayInput;
}


export class MergeBranchesByThreeWayResponse extends SpeakeasyBase {
  @Metadata()
  branchDoesNotExistException?: any;

  @Metadata()
  branchNameIsTagNameException?: any;

  @Metadata()
  branchNameRequiredException?: any;

  @Metadata()
  commitDoesNotExistException?: any;

  @Metadata()
  commitMessageLengthExceededException?: any;

  @Metadata()
  commitRequiredException?: any;

  @Metadata()
  concurrentReferenceUpdateException?: any;

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
  fileContentSizeLimitExceededException?: any;

  @Metadata()
  fileModeRequiredException?: any;

  @Metadata()
  folderContentSizeLimitExceededException?: any;

  @Metadata()
  invalidBranchNameException?: any;

  @Metadata()
  invalidCommitException?: any;

  @Metadata()
  invalidConflictDetailLevelException?: any;

  @Metadata()
  invalidConflictResolutionException?: any;

  @Metadata()
  invalidConflictResolutionStrategyException?: any;

  @Metadata()
  invalidEmailException?: any;

  @Metadata()
  invalidFileModeException?: any;

  @Metadata()
  invalidPathException?: any;

  @Metadata()
  invalidReplacementContentException?: any;

  @Metadata()
  invalidReplacementTypeException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  invalidTargetBranchException?: any;

  @Metadata()
  manualMergeRequiredException?: any;

  @Metadata()
  maximumConflictResolutionEntriesExceededException?: any;

  @Metadata()
  maximumFileContentToLoadExceededException?: any;

  @Metadata()
  maximumItemsToCompareExceededException?: any;

  @Metadata()
  mergeBranchesByThreeWayOutput?: shared.MergeBranchesByThreeWayOutput;

  @Metadata()
  multipleConflictResolutionEntriesException?: any;

  @Metadata()
  nameLengthExceededException?: any;

  @Metadata()
  pathRequiredException?: any;

  @Metadata()
  replacementContentRequiredException?: any;

  @Metadata()
  replacementTypeRequiredException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tipsDivergenceExceededException?: any;
}
