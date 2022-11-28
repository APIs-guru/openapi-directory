import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartCrawlerScheduleXAmzTargetEnum {
    AwsGlueStartCrawlerSchedule = "AWSGlue.StartCrawlerSchedule"
}


export class StartCrawlerScheduleHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartCrawlerScheduleXAmzTargetEnum;
}


export class StartCrawlerScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartCrawlerScheduleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartCrawlerScheduleRequest;
}


export class StartCrawlerScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entityNotFoundException?: any;

  @SpeakeasyMetadata()
  noScheduleException?: any;

  @SpeakeasyMetadata()
  operationTimeoutException?: any;

  @SpeakeasyMetadata()
  schedulerRunningException?: any;

  @SpeakeasyMetadata()
  schedulerTransitioningException?: any;

  @SpeakeasyMetadata()
  startCrawlerScheduleResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
