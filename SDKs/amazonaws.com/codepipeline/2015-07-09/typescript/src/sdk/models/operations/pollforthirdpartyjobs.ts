import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PollForThirdPartyJobsXAmzTargetEnum {
    CodePipeline20150709PollForThirdPartyJobs = "CodePipeline_20150709.PollForThirdPartyJobs"
}


export class PollForThirdPartyJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PollForThirdPartyJobsXAmzTargetEnum;
}


export class PollForThirdPartyJobsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PollForThirdPartyJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PollForThirdPartyJobsInput;
}


export class PollForThirdPartyJobsResponse extends SpeakeasyBase {
  @Metadata()
  actionTypeNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  pollForThirdPartyJobsOutput?: shared.PollForThirdPartyJobsOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
