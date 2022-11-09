import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListNotificationRulesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListNotificationRulesHeaders extends SpeakeasyBase {
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
}


export class ListNotificationRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.ListNotificationRulesFilter })
  filters?: shared.ListNotificationRulesFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}


export class ListNotificationRulesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListNotificationRulesQueryParams;

  @Metadata()
  headers: ListNotificationRulesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListNotificationRulesRequestBody;
}


export class ListNotificationRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listNotificationRulesResult?: shared.ListNotificationRulesResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
