import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PollForThirdPartyJobsXAmzTargetEnum {
    CodePipeline20150709PollForThirdPartyJobs = "CodePipeline_20150709.PollForThirdPartyJobs"
}


export class PollForThirdPartyJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PollForThirdPartyJobsXAmzTargetEnum;
}


export class PollForThirdPartyJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PollForThirdPartyJobsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PollForThirdPartyJobsInput;
}


export class PollForThirdPartyJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionTypeNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pollForThirdPartyJobsOutput?: shared.PollForThirdPartyJobsOutput;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
