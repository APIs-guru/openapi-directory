import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPullRequestOverrideStateXAmzTargetEnum {
    CodeCommit20150413GetPullRequestOverrideState = "CodeCommit_20150413.GetPullRequestOverrideState"
}


export class GetPullRequestOverrideStateHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetPullRequestOverrideStateXAmzTargetEnum;
}


export class GetPullRequestOverrideStateRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPullRequestOverrideStateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetPullRequestOverrideStateInput;
}


export class GetPullRequestOverrideStateResponse extends SpeakeasyBase {
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
  getPullRequestOverrideStateOutput?: shared.GetPullRequestOverrideStateOutput;

  @Metadata()
  invalidPullRequestIdException?: any;

  @Metadata()
  invalidRevisionIdException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  revisionIdRequiredException?: any;

  @Metadata()
  statusCode: number;
}
