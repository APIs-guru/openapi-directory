import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveThingFromBillingGroupHeaders extends SpeakeasyBase {
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


export class RemoveThingFromBillingGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingGroupArn" })
  billingGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=billingGroupName" })
  billingGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;
}


export class RemoveThingFromBillingGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RemoveThingFromBillingGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveThingFromBillingGroupRequestBody;
}


export class RemoveThingFromBillingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  removeThingFromBillingGroupResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
