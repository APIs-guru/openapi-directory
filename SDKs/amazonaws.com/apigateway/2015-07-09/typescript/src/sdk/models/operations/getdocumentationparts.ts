import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDocumentationPartsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}

export enum GetDocumentationPartsLocationStatusEnum {
    Documented = "DOCUMENTED"
,    Undocumented = "UNDOCUMENTED"
}

export enum GetDocumentationPartsTypeEnum {
    Api = "API"
,    Authorizer = "AUTHORIZER"
,    Model = "MODEL"
,    Resource = "RESOURCE"
,    Method = "METHOD"
,    PathParameter = "PATH_PARAMETER"
,    QueryParameter = "QUERY_PARAMETER"
,    RequestHeader = "REQUEST_HEADER"
,    RequestBody = "REQUEST_BODY"
,    Response = "RESPONSE"
,    ResponseHeader = "RESPONSE_HEADER"
,    ResponseBody = "RESPONSE_BODY"
}


export class GetDocumentationPartsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationStatus" })
  locationStatus?: GetDocumentationPartsLocationStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetDocumentationPartsTypeEnum;
}


export class GetDocumentationPartsHeaders extends SpeakeasyBase {
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


export class GetDocumentationPartsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDocumentationPartsPathParams;

  @Metadata()
  queryParams: GetDocumentationPartsQueryParams;

  @Metadata()
  headers: GetDocumentationPartsHeaders;
}


export class GetDocumentationPartsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  documentationParts?: shared.DocumentationParts;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
