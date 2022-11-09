import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveThingFromThingGroupHeaders extends SpeakeasyBase {
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


export class RemoveThingFromThingGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @Metadata({ data: "json, name=thingGroupArn" })
  thingGroupArn?: string;

  @Metadata({ data: "json, name=thingGroupName" })
  thingGroupName?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;
}


export class RemoveThingFromThingGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: RemoveThingFromThingGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveThingFromThingGroupRequestBody;
}


export class RemoveThingFromThingGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  removeThingFromThingGroupResponse?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
