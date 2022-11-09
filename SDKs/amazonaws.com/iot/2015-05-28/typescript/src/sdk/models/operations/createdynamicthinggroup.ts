import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDynamicThingGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingGroupName" })
  thingGroupName: string;
}


export class CreateDynamicThingGroupHeaders extends SpeakeasyBase {
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


// CreateDynamicThingGroupRequestBodyThingGroupProperties
/** 
 * Thing group properties.
**/
export class CreateDynamicThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributePayload" })
  attributePayload?: shared.AttributePayload;

  @Metadata({ data: "json, name=thingGroupDescription" })
  thingGroupDescription?: string;
}


export class CreateDynamicThingGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexName" })
  indexName?: string;

  @Metadata({ data: "json, name=queryString" })
  queryString: string;

  @Metadata({ data: "json, name=queryVersion" })
  queryVersion?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=thingGroupProperties" })
  thingGroupProperties?: CreateDynamicThingGroupRequestBodyThingGroupProperties;
}


export class CreateDynamicThingGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDynamicThingGroupPathParams;

  @Metadata()
  headers: CreateDynamicThingGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDynamicThingGroupRequestBody;
}


export class CreateDynamicThingGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDynamicThingGroupResponse?: shared.CreateDynamicThingGroupResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidQueryException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
