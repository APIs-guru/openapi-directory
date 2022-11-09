import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PollForJobsXAmzTargetEnum {
    CodePipeline20150709PollForJobs = "CodePipeline_20150709.PollForJobs"
}


export class PollForJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PollForJobsXAmzTargetEnum;
}


export class PollForJobsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PollForJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PollForJobsInput;
}


export class PollForJobsResponse extends SpeakeasyBase {
  @Metadata()
  actionTypeNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  pollForJobsOutput?: shared.PollForJobsOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
