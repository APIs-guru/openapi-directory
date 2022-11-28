import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateUnreferencedMergeCommitXAmzTargetEnum {
    CodeCommit20150413CreateUnreferencedMergeCommit = "CodeCommit_20150413.CreateUnreferencedMergeCommit"
}


export class CreateUnreferencedMergeCommitHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateUnreferencedMergeCommitXAmzTargetEnum;
}


export class CreateUnreferencedMergeCommitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateUnreferencedMergeCommitHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateUnreferencedMergeCommitInput;
}


export class CreateUnreferencedMergeCommitResponse extends SpeakeasyBase {
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
  createUnreferencedMergeCommitOutput?: shared.CreateUnreferencedMergeCommitOutput;

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
  invalidMergeOptionException?: any;

  @SpeakeasyMetadata()
  invalidPathException?: any;

  @SpeakeasyMetadata()
  invalidReplacementContentException?: any;

  @SpeakeasyMetadata()
  invalidReplacementTypeException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryNameException?: any;

  @SpeakeasyMetadata()
  manualMergeRequiredException?: any;

  @SpeakeasyMetadata()
  maximumConflictResolutionEntriesExceededException?: any;

  @SpeakeasyMetadata()
  maximumFileContentToLoadExceededException?: any;

  @SpeakeasyMetadata()
  maximumItemsToCompareExceededException?: any;

  @SpeakeasyMetadata()
  mergeOptionRequiredException?: any;

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
