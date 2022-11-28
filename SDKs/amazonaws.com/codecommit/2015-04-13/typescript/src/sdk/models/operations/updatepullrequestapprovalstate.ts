import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdatePullRequestApprovalStateXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestApprovalState = "CodeCommit_20150413.UpdatePullRequestApprovalState"
}


export class UpdatePullRequestApprovalStateHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePullRequestApprovalStateXAmzTargetEnum;
}


export class UpdatePullRequestApprovalStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdatePullRequestApprovalStateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePullRequestApprovalStateInput;
}


export class UpdatePullRequestApprovalStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  approvalStateRequiredException?: any;

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
  invalidApprovalStateException?: any;

  @SpeakeasyMetadata()
  invalidPullRequestIdException?: any;

  @SpeakeasyMetadata()
  invalidRevisionIdException?: any;

  @SpeakeasyMetadata()
  maximumNumberOfApprovalsExceededException?: any;

  @SpeakeasyMetadata()
  pullRequestAlreadyClosedException?: any;

  @SpeakeasyMetadata()
  pullRequestCannotBeApprovedByAuthorException?: any;

  @SpeakeasyMetadata()
  pullRequestDoesNotExistException?: any;

  @SpeakeasyMetadata()
  pullRequestIdRequiredException?: any;

  @SpeakeasyMetadata()
  revisionIdRequiredException?: any;

  @SpeakeasyMetadata()
  revisionNotCurrentException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
