import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDocumentationPartPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class CreateDocumentationPartHeaders extends SpeakeasyBase {
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


// CreateDocumentationPartRequestBodyLocation
/** 
 * Specifies the target API entity to which the documentation applies.
**/
export class CreateDocumentationPartRequestBodyLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @Metadata({ data: "json, name=type" })
  type?: shared.DocumentationPartTypeEnum;
}


export class CreateDocumentationPartRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: CreateDocumentationPartRequestBodyLocation;

  @Metadata({ data: "json, name=properties" })
  properties: string;
}


export class CreateDocumentationPartRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDocumentationPartPathParams;

  @Metadata()
  headers: CreateDocumentationPartHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDocumentationPartRequestBody;
}


export class CreateDocumentationPartResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  documentationPart?: shared.DocumentationPart;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
