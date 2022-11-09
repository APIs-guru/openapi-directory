import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateThingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingName" })
  thingName: string;
}


export class UpdateThingHeaders extends SpeakeasyBase {
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


// UpdateThingRequestBodyAttributePayload
/** 
 * The attribute payload.
**/
export class UpdateThingRequestBodyAttributePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=merge" })
  merge?: boolean;
}


export class UpdateThingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributePayload" })
  attributePayload?: UpdateThingRequestBodyAttributePayload;

  @Metadata({ data: "json, name=expectedVersion" })
  expectedVersion?: number;

  @Metadata({ data: "json, name=removeThingType" })
  removeThingType?: boolean;

  @Metadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;
}


export class UpdateThingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateThingPathParams;

  @Metadata()
  headers: UpdateThingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateThingRequestBody;
}


export class UpdateThingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateThingResponse?: Map<string, any>;

  @Metadata()
  versionConflictException?: any;
}
