import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdatePullRequestStatusXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestStatus = "CodeCommit_20150413.UpdatePullRequestStatus"
}


export class UpdatePullRequestStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePullRequestStatusXAmzTargetEnum;
}


export class UpdatePullRequestStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdatePullRequestStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePullRequestStatusInput;
}


export class UpdatePullRequestStatusResponse extends SpeakeasyBase {
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
  invalidPullRequestIdException?: any;

  @SpeakeasyMetadata()
  invalidPullRequestStatusException?: any;

  @SpeakeasyMetadata()
  invalidPullRequestStatusUpdateException?: any;

  @SpeakeasyMetadata()
  pullRequestDoesNotExistException?: any;

  @SpeakeasyMetadata()
  pullRequestIdRequiredException?: any;

  @SpeakeasyMetadata()
  pullRequestStatusRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePullRequestStatusOutput?: shared.UpdatePullRequestStatusOutput;
}
