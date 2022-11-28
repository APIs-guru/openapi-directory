import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingGroupMetadata } from "./billinggroupmetadata";
import { BillingGroupProperties } from "./billinggroupproperties";



export class DescribeBillingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingGroupArn" })
  billingGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=billingGroupId" })
  billingGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=billingGroupMetadata" })
  billingGroupMetadata?: BillingGroupMetadata;

  @SpeakeasyMetadata({ data: "json, name=billingGroupName" })
  billingGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=billingGroupProperties" })
  billingGroupProperties?: BillingGroupProperties;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
