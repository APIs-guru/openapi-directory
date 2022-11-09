import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdatePullRequestStatusXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestStatus = "CodeCommit_20150413.UpdatePullRequestStatus"
}


export class UpdatePullRequestStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePullRequestStatusXAmzTargetEnum;
}


export class UpdatePullRequestStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdatePullRequestStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePullRequestStatusInput;
}


export class UpdatePullRequestStatusResponse extends SpeakeasyBase {
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
  invalidPullRequestIdException?: any;

  @Metadata()
  invalidPullRequestStatusException?: any;

  @Metadata()
  invalidPullRequestStatusUpdateException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  pullRequestStatusRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePullRequestStatusOutput?: shared.UpdatePullRequestStatusOutput;
}
