import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum MergePullRequestByFastForwardXAmzTargetEnum {
    CodeCommit20150413MergePullRequestByFastForward = "CodeCommit_20150413.MergePullRequestByFastForward"
}


export class MergePullRequestByFastForwardHeaders extends SpeakeasyBase {
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
  xAmzTarget: MergePullRequestByFastForwardXAmzTargetEnum;
}


export class MergePullRequestByFastForwardRequest extends SpeakeasyBase {
  @Metadata()
  headers: MergePullRequestByFastForwardHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MergePullRequestByFastForwardInput;
}


export class MergePullRequestByFastForwardResponse extends SpeakeasyBase {
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
  invalidCommitIdException?: any;

  @Metadata()
  invalidPullRequestIdException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  manualMergeRequiredException?: any;

  @Metadata()
  mergePullRequestByFastForwardOutput?: shared.MergePullRequestByFastForwardOutput;

  @Metadata()
  pullRequestAlreadyClosedException?: any;

  @Metadata()
  pullRequestApprovalRulesNotSatisfiedException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  referenceDoesNotExistException?: any;

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
}
