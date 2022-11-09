import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateCrawlerScheduleXAmzTargetEnum {
    AwsGlueUpdateCrawlerSchedule = "AWSGlue.UpdateCrawlerSchedule"
}


export class UpdateCrawlerScheduleHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateCrawlerScheduleXAmzTargetEnum;
}


export class UpdateCrawlerScheduleRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateCrawlerScheduleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCrawlerScheduleRequest;
}


export class UpdateCrawlerScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  schedulerTransitioningException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCrawlerScheduleResponse?: Map<string, any>;

  @Metadata()
  versionMismatchException?: any;
}
