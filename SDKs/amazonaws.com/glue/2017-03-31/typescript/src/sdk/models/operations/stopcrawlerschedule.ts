import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopCrawlerScheduleXAmzTargetEnum {
    AwsGlueStopCrawlerSchedule = "AWSGlue.StopCrawlerSchedule"
}


export class StopCrawlerScheduleHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopCrawlerScheduleXAmzTargetEnum;
}


export class StopCrawlerScheduleRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopCrawlerScheduleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopCrawlerScheduleRequest;
}


export class StopCrawlerScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  schedulerNotRunningException?: any;

  @Metadata()
  schedulerTransitioningException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopCrawlerScheduleResponse?: Map<string, any>;
}
