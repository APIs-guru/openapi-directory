import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetCrawlersXAmzTargetEnum {
    AwsGlueBatchGetCrawlers = "AWSGlue.BatchGetCrawlers"
}


export class BatchGetCrawlersHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetCrawlersXAmzTargetEnum;
}


export class BatchGetCrawlersRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetCrawlersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetCrawlersRequest;
}


export class BatchGetCrawlersResponse extends SpeakeasyBase {
  @Metadata()
  batchGetCrawlersResponse?: shared.BatchGetCrawlersResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
