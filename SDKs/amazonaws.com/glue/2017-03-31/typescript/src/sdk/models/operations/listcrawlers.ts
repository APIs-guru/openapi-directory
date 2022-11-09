import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCrawlersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListCrawlersXAmzTargetEnum {
    AwsGlueListCrawlers = "AWSGlue.ListCrawlers"
}


export class ListCrawlersHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListCrawlersXAmzTargetEnum;
}


export class ListCrawlersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCrawlersQueryParams;

  @Metadata()
  headers: ListCrawlersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListCrawlersRequest;
}


export class ListCrawlersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCrawlersResponse?: shared.ListCrawlersResponse;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
