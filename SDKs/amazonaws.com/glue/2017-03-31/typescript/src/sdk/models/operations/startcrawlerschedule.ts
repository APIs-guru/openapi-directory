import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartCrawlerScheduleXAmzTargetEnum {
    AwsGlueStartCrawlerSchedule = "AWSGlue.StartCrawlerSchedule"
}


export class StartCrawlerScheduleHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartCrawlerScheduleXAmzTargetEnum;
}


export class StartCrawlerScheduleRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartCrawlerScheduleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartCrawlerScheduleRequest;
}


export class StartCrawlerScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  noScheduleException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  schedulerRunningException?: any;

  @Metadata()
  schedulerTransitioningException?: any;

  @Metadata()
  startCrawlerScheduleResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
