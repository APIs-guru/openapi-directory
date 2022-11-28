import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateThingTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingTypeName" })
  thingTypeName: string;
}


export class CreateThingTypeHeaders extends SpeakeasyBase {
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


// CreateThingTypeRequestBodyThingTypeProperties
/** 
 * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
**/
export class CreateThingTypeRequestBodyThingTypeProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=searchableAttributes" })
  searchableAttributes?: string[];

  @SpeakeasyMetadata({ data: "json, name=thingTypeDescription" })
  thingTypeDescription?: string;
}


export class CreateThingTypeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=thingTypeProperties" })
  thingTypeProperties?: CreateThingTypeRequestBodyThingTypeProperties;
}


export class CreateThingTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateThingTypePathParams;

  @SpeakeasyMetadata()
  headers: CreateThingTypeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateThingTypeRequestBody;
}


export class CreateThingTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createThingTypeResponse?: shared.CreateThingTypeResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
