import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddThingToBillingGroupHeaders extends SpeakeasyBase {
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


export class AddThingToBillingGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingGroupArn" })
  billingGroupArn?: string;

  @Metadata({ data: "json, name=billingGroupName" })
  billingGroupName?: string;

  @Metadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;
}


export class AddThingToBillingGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddThingToBillingGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddThingToBillingGroupRequestBody;
}


export class AddThingToBillingGroupResponse extends SpeakeasyBase {
  @Metadata()
  addThingToBillingGroupResponse?: Map<string, any>;

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
