import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCrawlerMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetCrawlerMetricsXAmzTargetEnum {
    AwsGlueGetCrawlerMetrics = "AWSGlue.GetCrawlerMetrics"
}


export class GetCrawlerMetricsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCrawlerMetricsXAmzTargetEnum;
}


export class GetCrawlerMetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCrawlerMetricsQueryParams;

  @Metadata()
  headers: GetCrawlerMetricsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetCrawlerMetricsRequest;
}


export class GetCrawlerMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCrawlerMetricsResponse?: shared.GetCrawlerMetricsResponse;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
