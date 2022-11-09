import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdatePullRequestApprovalStateXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestApprovalState = "CodeCommit_20150413.UpdatePullRequestApprovalState"
}


export class UpdatePullRequestApprovalStateHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePullRequestApprovalStateXAmzTargetEnum;
}


export class UpdatePullRequestApprovalStateRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdatePullRequestApprovalStateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePullRequestApprovalStateInput;
}


export class UpdatePullRequestApprovalStateResponse extends SpeakeasyBase {
  @Metadata()
  approvalStateRequiredException?: any;

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
  invalidApprovalStateException?: any;

  @Metadata()
  invalidPullRequestIdException?: any;

  @Metadata()
  invalidRevisionIdException?: any;

  @Metadata()
  maximumNumberOfApprovalsExceededException?: any;

  @Metadata()
  pullRequestAlreadyClosedException?: any;

  @Metadata()
  pullRequestCannotBeApprovedByAuthorException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  revisionIdRequiredException?: any;

  @Metadata()
  revisionNotCurrentException?: any;

  @Metadata()
  statusCode: number;
}
