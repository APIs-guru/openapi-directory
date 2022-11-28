import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddThingToThingGroupHeaders extends SpeakeasyBase {
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


export class AddThingToThingGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overrideDynamicGroups" })
  overrideDynamicGroups?: boolean;

  @SpeakeasyMetadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupArn" })
  thingGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupName" })
  thingGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;
}


export class AddThingToThingGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddThingToThingGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddThingToThingGroupRequestBody;
}


export class AddThingToThingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addThingToThingGroupResponse?: Map<string, any>;

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
}
