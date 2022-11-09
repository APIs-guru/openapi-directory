import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteBranchXAmzTargetEnum {
    CodeCommit20150413DeleteBranch = "CodeCommit_20150413.DeleteBranch"
}


export class DeleteBranchHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteBranchXAmzTargetEnum;
}


export class DeleteBranchRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteBranchHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteBranchInput;
}


export class DeleteBranchResponse extends SpeakeasyBase {
  @Metadata()
  branchNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultBranchCannotBeDeletedException?: any;

  @Metadata()
  deleteBranchOutput?: shared.DeleteBranchOutput;

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
  invalidRepositoryNameException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;
}
