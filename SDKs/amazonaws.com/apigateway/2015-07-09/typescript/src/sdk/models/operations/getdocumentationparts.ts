import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDocumentationPartsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}

export enum GetDocumentationPartsLocationStatusEnum {
    Documented = "DOCUMENTED",
    Undocumented = "UNDOCUMENTED"
}

export enum GetDocumentationPartsTypeEnum {
    Api = "API",
    Authorizer = "AUTHORIZER",
    Model = "MODEL",
    Resource = "RESOURCE",
    Method = "METHOD",
    PathParameter = "PATH_PARAMETER",
    QueryParameter = "QUERY_PARAMETER",
    RequestHeader = "REQUEST_HEADER",
    RequestBody = "REQUEST_BODY",
    Response = "RESPONSE",
    ResponseHeader = "RESPONSE_HEADER",
    ResponseBody = "RESPONSE_BODY"
}


export class GetDocumentationPartsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationStatus" })
  locationStatus?: GetDocumentationPartsLocationStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetDocumentationPartsTypeEnum;
}


export class GetDocumentationPartsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetDocumentationPartsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentationPartsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDocumentationPartsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDocumentationPartsHeaders;
}


export class GetDocumentationPartsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentationParts?: shared.DocumentationParts;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
