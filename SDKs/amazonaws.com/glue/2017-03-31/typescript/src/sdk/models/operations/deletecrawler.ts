import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteCrawlerXAmzTargetEnum {
    AwsGlueDeleteCrawler = "AWSGlue.DeleteCrawler"
}


export class DeleteCrawlerHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteCrawlerXAmzTargetEnum;
}


export class DeleteCrawlerRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteCrawlerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteCrawlerRequest;
}


export class DeleteCrawlerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  crawlerRunningException?: any;

  @Metadata()
  deleteCrawlerResponse?: Map<string, any>;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  schedulerTransitioningException?: any;

  @Metadata()
  statusCode: number;
}
