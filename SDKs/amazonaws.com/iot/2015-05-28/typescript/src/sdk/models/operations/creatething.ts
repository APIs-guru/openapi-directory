import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateThingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingName" })
  thingName: string;
}


export class CreateThingHeaders extends SpeakeasyBase {
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


// CreateThingRequestBodyAttributePayload
/** 
 * The attribute payload.
**/
export class CreateThingRequestBodyAttributePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=merge" })
  merge?: boolean;
}


export class CreateThingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributePayload" })
  attributePayload?: CreateThingRequestBodyAttributePayload;

  @Metadata({ data: "json, name=billingGroupName" })
  billingGroupName?: string;

  @Metadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;
}


export class CreateThingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateThingPathParams;

  @Metadata()
  headers: CreateThingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateThingRequestBody;
}


export class CreateThingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createThingResponse?: shared.CreateThingResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

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
}
