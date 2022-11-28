import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetBranchXAmzTargetEnum {
    CodeCommit20150413GetBranch = "CodeCommit_20150413.GetBranch"
}


export class GetBranchHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetBranchXAmzTargetEnum;
}


export class GetBranchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetBranchHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetBranchInput;
}


export class GetBranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  branchDoesNotExistException?: any;

  @SpeakeasyMetadata()
  branchNameRequiredException?: any;

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
  getBranchOutput?: shared.GetBranchOutput;

  @SpeakeasyMetadata()
  invalidBranchNameException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryNameException?: any;

  @SpeakeasyMetadata()
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
