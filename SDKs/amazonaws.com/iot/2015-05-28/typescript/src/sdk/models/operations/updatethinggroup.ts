import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateThingGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingGroupName" })
  thingGroupName: string;
}


export class UpdateThingGroupHeaders extends SpeakeasyBase {
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


// UpdateThingGroupRequestBodyThingGroupProperties
/** 
 * Thing group properties.
**/
export class UpdateThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributePayload" })
  attributePayload?: shared.AttributePayload;

  @Metadata({ data: "json, name=thingGroupDescription" })
  thingGroupDescription?: string;
}


export class UpdateThingGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=expectedVersion" })
  expectedVersion?: number;

  @Metadata({ data: "json, name=thingGroupProperties" })
  thingGroupProperties: UpdateThingGroupRequestBodyThingGroupProperties;
}


export class UpdateThingGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateThingGroupPathParams;

  @Metadata()
  headers: UpdateThingGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateThingGroupRequestBody;
}


export class UpdateThingGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateThingGroupResponse?: shared.UpdateThingGroupResponse;

  @Metadata()
  versionConflictException?: any;
}
