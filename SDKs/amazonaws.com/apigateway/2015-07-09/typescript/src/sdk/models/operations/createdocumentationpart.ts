import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDocumentationPartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class CreateDocumentationPartHeaders extends SpeakeasyBase {
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


// CreateDocumentationPartRequestBodyLocation
/** 
 * Specifies the target API entity to which the documentation applies.
**/
export class CreateDocumentationPartRequestBodyLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: shared.DocumentationPartTypeEnum;
}


export class CreateDocumentationPartRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: CreateDocumentationPartRequestBodyLocation;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: string;
}


export class CreateDocumentationPartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDocumentationPartPathParams;

  @SpeakeasyMetadata()
  headers: CreateDocumentationPartHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDocumentationPartRequestBody;
}


export class CreateDocumentationPartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentationPart?: shared.DocumentationPart;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
