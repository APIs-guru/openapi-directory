import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdatePullRequestTitleXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestTitle = "CodeCommit_20150413.UpdatePullRequestTitle"
}


export class UpdatePullRequestTitleHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePullRequestTitleXAmzTargetEnum;
}


export class UpdatePullRequestTitleRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdatePullRequestTitleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePullRequestTitleInput;
}


export class UpdatePullRequestTitleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidPullRequestIdException?: any;

  @Metadata()
  invalidTitleException?: any;

  @Metadata()
  pullRequestAlreadyClosedException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  titleRequiredException?: any;

  @Metadata()
  updatePullRequestTitleOutput?: shared.UpdatePullRequestTitleOutput;
}
