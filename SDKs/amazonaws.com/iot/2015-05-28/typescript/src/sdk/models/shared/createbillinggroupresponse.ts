import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateBillingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingGroupArn" })
  billingGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=billingGroupId" })
  billingGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=billingGroupName" })
  billingGroupName?: string;
}
