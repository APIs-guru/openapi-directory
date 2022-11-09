import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum MergeBranchesByFastForwardXAmzTargetEnum {
    CodeCommit20150413MergeBranchesByFastForward = "CodeCommit_20150413.MergeBranchesByFastForward"
}


export class MergeBranchesByFastForwardHeaders extends SpeakeasyBase {
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
  xAmzTarget: MergeBranchesByFastForwardXAmzTargetEnum;
}


export class MergeBranchesByFastForwardRequest extends SpeakeasyBase {
  @Metadata()
  headers: MergeBranchesByFastForwardHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MergeBranchesByFastForwardInput;
}


export class MergeBranchesByFastForwardResponse extends SpeakeasyBase {
  @Metadata()
  branchDoesNotExistException?: any;

  @Metadata()
  branchNameIsTagNameException?: any;

  @Metadata()
  branchNameRequiredException?: any;

  @Metadata()
  commitDoesNotExistException?: any;

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
  invalidBranchNameException?: any;

  @Metadata()
  invalidCommitException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  invalidTargetBranchException?: any;

  @Metadata()
  manualMergeRequiredException?: any;

  @Metadata()
  mergeBranchesByFastForwardOutput?: shared.MergeBranchesByFastForwardOutput;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tipsDivergenceExceededException?: any;
}
