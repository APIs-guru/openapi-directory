import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum MergePullRequestBySquashXAmzTargetEnum {
    CodeCommit20150413MergePullRequestBySquash = "CodeCommit_20150413.MergePullRequestBySquash"
}


export class MergePullRequestBySquashHeaders extends SpeakeasyBase {
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
  xAmzTarget: MergePullRequestBySquashXAmzTargetEnum;
}


export class MergePullRequestBySquashRequest extends SpeakeasyBase {
  @Metadata()
  headers: MergePullRequestBySquashHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MergePullRequestBySquashInput;
}


export class MergePullRequestBySquashResponse extends SpeakeasyBase {
  @Metadata()
  commitMessageLengthExceededException?: any;

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
  folderContentSizeLimitExceededException?: any;

  @Metadata()
  invalidCommitIdException?: any;

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
  invalidPullRequestIdException?: any;

  @Metadata()
  invalidReplacementContentException?: any;

  @Metadata()
  invalidReplacementTypeException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  manualMergeRequiredException?: any;

  @Metadata()
  maximumConflictResolutionEntriesExceededException?: any;

  @Metadata()
  maximumFileContentToLoadExceededException?: any;

  @Metadata()
  maximumItemsToCompareExceededException?: any;

  @Metadata()
  mergePullRequestBySquashOutput?: shared.MergePullRequestBySquashOutput;

  @Metadata()
  multipleConflictResolutionEntriesException?: any;

  @Metadata()
  nameLengthExceededException?: any;

  @Metadata()
  pathRequiredException?: any;

  @Metadata()
  pullRequestAlreadyClosedException?: any;

  @Metadata()
  pullRequestApprovalRulesNotSatisfiedException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  replacementContentRequiredException?: any;

  @Metadata()
  replacementTypeRequiredException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  repositoryNotAssociatedWithPullRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tipOfSourceReferenceIsDifferentException?: any;

  @Metadata()
  tipsDivergenceExceededException?: any;
}
