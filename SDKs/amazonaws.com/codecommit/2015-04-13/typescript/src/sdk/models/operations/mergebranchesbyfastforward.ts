import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum MergeBranchesByFastForwardXAmzTargetEnum {
    CodeCommit20150413MergeBranchesByFastForward = "CodeCommit_20150413.MergeBranchesByFastForward"
}


export class MergeBranchesByFastForwardHeaders extends SpeakeasyBase {
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
  xAmzTarget: MergeBranchesByFastForwardXAmzTargetEnum;
}


export class MergeBranchesByFastForwardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: MergeBranchesByFastForwardHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MergeBranchesByFastForwardInput;
}


export class MergeBranchesByFastForwardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  branchDoesNotExistException?: any;

  @SpeakeasyMetadata()
  branchNameIsTagNameException?: any;

  @SpeakeasyMetadata()
  branchNameRequiredException?: any;

  @SpeakeasyMetadata()
  commitDoesNotExistException?: any;

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
  invalidBranchNameException?: any;

  @SpeakeasyMetadata()
  invalidCommitException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryNameException?: any;

  @SpeakeasyMetadata()
  invalidTargetBranchException?: any;

  @SpeakeasyMetadata()
  manualMergeRequiredException?: any;

  @SpeakeasyMetadata()
  mergeBranchesByFastForwardOutput?: shared.MergeBranchesByFastForwardOutput;

  @SpeakeasyMetadata()
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tipsDivergenceExceededException?: any;
}
