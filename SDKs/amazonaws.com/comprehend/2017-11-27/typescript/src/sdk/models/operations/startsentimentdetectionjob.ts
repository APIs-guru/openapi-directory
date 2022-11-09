import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartSentimentDetectionJobXAmzTargetEnum {
    Comprehend20171127StartSentimentDetectionJob = "Comprehend_20171127.StartSentimentDetectionJob"
}


export class StartSentimentDetectionJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartSentimentDetectionJobXAmzTargetEnum;
}


export class StartSentimentDetectionJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartSentimentDetectionJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartSentimentDetectionJobRequest;
}


export class StartSentimentDetectionJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  kmsKeyValidationException?: any;

  @Metadata()
  startSentimentDetectionJobResponse?: shared.StartSentimentDetectionJobResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  tooManyTagsException?: any;
}
