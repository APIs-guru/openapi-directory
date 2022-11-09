import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateThingTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingTypeName" })
  thingTypeName: string;
}


export class CreateThingTypeHeaders extends SpeakeasyBase {
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


// CreateThingTypeRequestBodyThingTypeProperties
/** 
 * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
**/
export class CreateThingTypeRequestBodyThingTypeProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=searchableAttributes" })
  searchableAttributes?: string[];

  @Metadata({ data: "json, name=thingTypeDescription" })
  thingTypeDescription?: string;
}


export class CreateThingTypeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=thingTypeProperties" })
  thingTypeProperties?: CreateThingTypeRequestBodyThingTypeProperties;
}


export class CreateThingTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateThingTypePathParams;

  @Metadata()
  headers: CreateThingTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateThingTypeRequestBody;
}


export class CreateThingTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createThingTypeResponse?: shared.CreateThingTypeResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}
