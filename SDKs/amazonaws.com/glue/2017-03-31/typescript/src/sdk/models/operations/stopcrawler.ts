import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopCrawlerXAmzTargetEnum {
    AwsGlueStopCrawler = "AWSGlue.StopCrawler"
}


export class StopCrawlerHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopCrawlerXAmzTargetEnum;
}


export class StopCrawlerRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopCrawlerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopCrawlerRequest;
}


export class StopCrawlerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  crawlerNotRunningException?: any;

  @Metadata()
  crawlerStoppingException?: any;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopCrawlerResponse?: Map<string, any>;
}
