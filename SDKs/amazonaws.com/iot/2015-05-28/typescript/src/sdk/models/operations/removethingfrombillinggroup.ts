import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveThingFromBillingGroupHeaders extends SpeakeasyBase {
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


export class RemoveThingFromBillingGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingGroupArn" })
  billingGroupArn?: string;

  @Metadata({ data: "json, name=billingGroupName" })
  billingGroupName?: string;

  @Metadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;
}


export class RemoveThingFromBillingGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: RemoveThingFromBillingGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveThingFromBillingGroupRequestBody;
}


export class RemoveThingFromBillingGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  removeThingFromBillingGroupResponse?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
