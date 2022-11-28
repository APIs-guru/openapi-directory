import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetPullRequestOverrideStateXAmzTargetEnum {
    CodeCommit20150413GetPullRequestOverrideState = "CodeCommit_20150413.GetPullRequestOverrideState"
}


export class GetPullRequestOverrideStateHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetPullRequestOverrideStateXAmzTargetEnum;
}


export class GetPullRequestOverrideStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetPullRequestOverrideStateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetPullRequestOverrideStateInput;
}


export class GetPullRequestOverrideStateResponse extends SpeakeasyBase {
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
  getPullRequestOverrideStateOutput?: shared.GetPullRequestOverrideStateOutput;

  @SpeakeasyMetadata()
  invalidPullRequestIdException?: any;

  @SpeakeasyMetadata()
  invalidRevisionIdException?: any;

  @SpeakeasyMetadata()
  pullRequestDoesNotExistException?: any;

  @SpeakeasyMetadata()
  pullRequestIdRequiredException?: any;

  @SpeakeasyMetadata()
  revisionIdRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
