import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateBillingGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingGroupArn" })
  billingGroupArn?: string;

  @Metadata({ data: "json, name=billingGroupId" })
  billingGroupId?: string;

  @Metadata({ data: "json, name=billingGroupName" })
  billingGroupName?: string;
}
