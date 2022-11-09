import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDynamicThingGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingGroupName" })
  thingGroupName: string;
}


export class UpdateDynamicThingGroupHeaders extends SpeakeasyBase {
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


// UpdateDynamicThingGroupRequestBodyThingGroupProperties
/** 
 * Thing group properties.
**/
export class UpdateDynamicThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributePayload" })
  attributePayload?: shared.AttributePayload;

  @Metadata({ data: "json, name=thingGroupDescription" })
  thingGroupDescription?: string;
}


export class UpdateDynamicThingGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=expectedVersion" })
  expectedVersion?: number;

  @Metadata({ data: "json, name=indexName" })
  indexName?: string;

  @Metadata({ data: "json, name=queryString" })
  queryString?: string;

  @Metadata({ data: "json, name=queryVersion" })
  queryVersion?: string;

  @Metadata({ data: "json, name=thingGroupProperties" })
  thingGroupProperties: UpdateDynamicThingGroupRequestBodyThingGroupProperties;
}


export class UpdateDynamicThingGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDynamicThingGroupPathParams;

  @Metadata()
  headers: UpdateDynamicThingGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDynamicThingGroupRequestBody;
}


export class UpdateDynamicThingGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidQueryException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateDynamicThingGroupResponse?: shared.UpdateDynamicThingGroupResponse;

  @Metadata()
  versionConflictException?: any;
}
