import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDynamicThingGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingGroupName" })
  thingGroupName: string;
}


export class CreateDynamicThingGroupHeaders extends SpeakeasyBase {
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


// CreateDynamicThingGroupRequestBodyThingGroupProperties
/** 
 * Thing group properties.
**/
export class CreateDynamicThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributePayload" })
  attributePayload?: shared.AttributePayload;

  @SpeakeasyMetadata({ data: "json, name=thingGroupDescription" })
  thingGroupDescription?: string;
}


export class CreateDynamicThingGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString: string;

  @SpeakeasyMetadata({ data: "json, name=queryVersion" })
  queryVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=thingGroupProperties" })
  thingGroupProperties?: CreateDynamicThingGroupRequestBodyThingGroupProperties;
}


export class CreateDynamicThingGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDynamicThingGroupPathParams;

  @SpeakeasyMetadata()
  headers: CreateDynamicThingGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDynamicThingGroupRequestBody;
}


export class CreateDynamicThingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDynamicThingGroupResponse?: shared.CreateDynamicThingGroupResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidQueryException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
