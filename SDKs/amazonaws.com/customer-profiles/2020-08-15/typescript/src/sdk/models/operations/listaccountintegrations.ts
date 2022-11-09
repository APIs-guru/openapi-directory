import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAccountIntegrationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=max-results" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=next-token" })
  nextToken?: string;
}


export class ListAccountIntegrationsHeaders extends SpeakeasyBase {
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


export class ListAccountIntegrationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Uri" })
  uri: string;
}


export class ListAccountIntegrationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAccountIntegrationsQueryParams;

  @Metadata()
  headers: ListAccountIntegrationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListAccountIntegrationsRequestBody;
}


export class ListAccountIntegrationsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listAccountIntegrationsResponse?: shared.ListAccountIntegrationsResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
