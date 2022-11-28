import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateThingGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingGroupName" })
  thingGroupName: string;
}


export class UpdateThingGroupHeaders extends SpeakeasyBase {
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


// UpdateThingGroupRequestBodyThingGroupProperties
/** 
 * Thing group properties.
**/
export class UpdateThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributePayload" })
  attributePayload?: shared.AttributePayload;

  @SpeakeasyMetadata({ data: "json, name=thingGroupDescription" })
  thingGroupDescription?: string;
}


export class UpdateThingGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expectedVersion" })
  expectedVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=thingGroupProperties" })
  thingGroupProperties: UpdateThingGroupRequestBodyThingGroupProperties;
}


export class UpdateThingGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateThingGroupPathParams;

  @SpeakeasyMetadata()
  headers: UpdateThingGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateThingGroupRequestBody;
}


export class UpdateThingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateThingGroupResponse?: shared.UpdateThingGroupResponse;

  @SpeakeasyMetadata()
  versionConflictException?: any;
}
