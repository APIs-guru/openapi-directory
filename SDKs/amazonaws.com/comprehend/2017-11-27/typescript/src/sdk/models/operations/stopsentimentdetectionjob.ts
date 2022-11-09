import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopSentimentDetectionJobXAmzTargetEnum {
    Comprehend20171127StopSentimentDetectionJob = "Comprehend_20171127.StopSentimentDetectionJob"
}


export class StopSentimentDetectionJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopSentimentDetectionJobXAmzTargetEnum;
}


export class StopSentimentDetectionJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopSentimentDetectionJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopSentimentDetectionJobRequest;
}


export class StopSentimentDetectionJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  jobNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopSentimentDetectionJobResponse?: shared.StopSentimentDetectionJobResponse;
}
