import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateThingGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingGroupName" })
  thingGroupName: string;
}


export class CreateThingGroupHeaders extends SpeakeasyBase {
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


// CreateThingGroupRequestBodyThingGroupProperties
/** 
 * Thing group properties.
**/
export class CreateThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributePayload" })
  attributePayload?: shared.AttributePayload;

  @Metadata({ data: "json, name=thingGroupDescription" })
  thingGroupDescription?: string;
}


export class CreateThingGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=parentGroupName" })
  parentGroupName?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=thingGroupProperties" })
  thingGroupProperties?: CreateThingGroupRequestBodyThingGroupProperties;
}


export class CreateThingGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateThingGroupPathParams;

  @Metadata()
  headers: CreateThingGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateThingGroupRequestBody;
}


export class CreateThingGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createThingGroupResponse?: shared.CreateThingGroupResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
