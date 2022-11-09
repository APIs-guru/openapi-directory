import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddThingToThingGroupHeaders extends SpeakeasyBase {
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


export class AddThingToThingGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=overrideDynamicGroups" })
  overrideDynamicGroups?: boolean;

  @Metadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @Metadata({ data: "json, name=thingGroupArn" })
  thingGroupArn?: string;

  @Metadata({ data: "json, name=thingGroupName" })
  thingGroupName?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;
}


export class AddThingToThingGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddThingToThingGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddThingToThingGroupRequestBody;
}


export class AddThingToThingGroupResponse extends SpeakeasyBase {
  @Metadata()
  addThingToThingGroupResponse?: Map<string, any>;

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
}
