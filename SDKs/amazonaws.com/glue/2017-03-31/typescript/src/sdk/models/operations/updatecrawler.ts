import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateCrawlerXAmzTargetEnum {
    AwsGlueUpdateCrawler = "AWSGlue.UpdateCrawler"
}


export class UpdateCrawlerHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateCrawlerXAmzTargetEnum;
}


export class UpdateCrawlerRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateCrawlerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCrawlerRequest;
}


export class UpdateCrawlerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  crawlerRunningException?: any;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCrawlerResponse?: Map<string, any>;

  @Metadata()
  versionMismatchException?: any;
}
