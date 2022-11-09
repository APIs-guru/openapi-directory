import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdatePullRequestDescriptionXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestDescription = "CodeCommit_20150413.UpdatePullRequestDescription"
}


export class UpdatePullRequestDescriptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePullRequestDescriptionXAmzTargetEnum;
}


export class UpdatePullRequestDescriptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdatePullRequestDescriptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePullRequestDescriptionInput;
}


export class UpdatePullRequestDescriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidDescriptionException?: any;

  @Metadata()
  invalidPullRequestIdException?: any;

  @Metadata()
  pullRequestAlreadyClosedException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePullRequestDescriptionOutput?: shared.UpdatePullRequestDescriptionOutput;
}
