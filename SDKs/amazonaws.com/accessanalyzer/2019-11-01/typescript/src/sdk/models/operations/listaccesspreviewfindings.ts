import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAccessPreviewFindingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accessPreviewId" })
  accessPreviewId: string;
}


export class ListAccessPreviewFindingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListAccessPreviewFindingsHeaders extends SpeakeasyBase {
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


export class ListAccessPreviewFindingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzerArn" })
  analyzerArn: string;

  @Metadata({ data: "json, name=filter", elemType: shared.Criterion })
  filter?: Map<string, shared.Criterion>;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class ListAccessPreviewFindingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListAccessPreviewFindingsPathParams;

  @Metadata()
  queryParams: ListAccessPreviewFindingsQueryParams;

  @Metadata()
  headers: ListAccessPreviewFindingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListAccessPreviewFindingsRequestBody;
}


export class ListAccessPreviewFindingsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listAccessPreviewFindingsResponse?: shared.ListAccessPreviewFindingsResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
