import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateThingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingName" })
  thingName: string;
}


export class UpdateThingHeaders extends SpeakeasyBase {
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


// UpdateThingRequestBodyAttributePayload
/** 
 * The attribute payload.
**/
export class UpdateThingRequestBodyAttributePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=merge" })
  merge?: boolean;
}


export class UpdateThingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributePayload" })
  attributePayload?: UpdateThingRequestBodyAttributePayload;

  @SpeakeasyMetadata({ data: "json, name=expectedVersion" })
  expectedVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=removeThingType" })
  removeThingType?: boolean;

  @SpeakeasyMetadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;
}


export class UpdateThingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateThingPathParams;

  @SpeakeasyMetadata()
  headers: UpdateThingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateThingRequestBody;
}


export class UpdateThingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateThingResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  versionConflictException?: any;
}
