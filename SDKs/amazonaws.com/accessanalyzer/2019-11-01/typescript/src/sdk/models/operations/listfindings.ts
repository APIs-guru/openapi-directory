import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListFindingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListFindingsHeaders extends SpeakeasyBase {
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


// ListFindingsRequestBodySort
/** 
 * The criteria used to sort.
**/
export class ListFindingsRequestBodySort extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: shared.OrderByEnum;
}


export class ListFindingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzerArn" })
  analyzerArn: string;

  @Metadata({ data: "json, name=filter", elemType: shared.Criterion })
  filter?: Map<string, shared.Criterion>;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sort" })
  sort?: ListFindingsRequestBodySort;
}


export class ListFindingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListFindingsQueryParams;

  @Metadata()
  headers: ListFindingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListFindingsRequestBody;
}


export class ListFindingsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listFindingsResponse?: shared.ListFindingsResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
