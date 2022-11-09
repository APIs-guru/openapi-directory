import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListStoredQueriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListStoredQueriesXAmzTargetEnum {
    StarlingDoveServiceListStoredQueries = "StarlingDoveService.ListStoredQueries"
}


export class ListStoredQueriesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListStoredQueriesXAmzTargetEnum;
}


export class ListStoredQueriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListStoredQueriesQueryParams;

  @Metadata()
  headers: ListStoredQueriesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListStoredQueriesRequest;
}


export class ListStoredQueriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listStoredQueriesResponse?: shared.ListStoredQueriesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
