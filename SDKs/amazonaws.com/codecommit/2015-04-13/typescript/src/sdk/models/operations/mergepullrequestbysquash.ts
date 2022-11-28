import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum MergePullRequestBySquashXAmzTargetEnum {
    CodeCommit20150413MergePullRequestBySquash = "CodeCommit_20150413.MergePullRequestBySquash"
}


export class MergePullRequestBySquashHeaders extends SpeakeasyBase {
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
  xAmzTarget: MergePullRequestBySquashXAmzTargetEnum;
}


export class MergePullRequestBySquashRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: MergePullRequestBySquashHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MergePullRequestBySquashInput;
}


export class MergePullRequestBySquashResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commitMessageLengthExceededException?: any;

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
  folderContentSizeLimitExceededException?: any;

  @SpeakeasyMetadata()
  invalidCommitIdException?: any;

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
  invalidPullRequestIdException?: any;

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
  mergePullRequestBySquashOutput?: shared.MergePullRequestBySquashOutput;

  @SpeakeasyMetadata()
  multipleConflictResolutionEntriesException?: any;

  @SpeakeasyMetadata()
  nameLengthExceededException?: any;

  @SpeakeasyMetadata()
  pathRequiredException?: any;

  @SpeakeasyMetadata()
  pullRequestAlreadyClosedException?: any;

  @SpeakeasyMetadata()
  pullRequestApprovalRulesNotSatisfiedException?: any;

  @SpeakeasyMetadata()
  pullRequestDoesNotExistException?: any;

  @SpeakeasyMetadata()
  pullRequestIdRequiredException?: any;

  @SpeakeasyMetadata()
  replacementContentRequiredException?: any;

  @SpeakeasyMetadata()
  replacementTypeRequiredException?: any;

  @SpeakeasyMetadata()
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  repositoryNotAssociatedWithPullRequestException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tipOfSourceReferenceIsDifferentException?: any;

  @SpeakeasyMetadata()
  tipsDivergenceExceededException?: any;
}
