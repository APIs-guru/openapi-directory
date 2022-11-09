import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BillingGroupMetadata } from "./billinggroupmetadata";
import { BillingGroupProperties } from "./billinggroupproperties";


export class DescribeBillingGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingGroupArn" })
  billingGroupArn?: string;

  @Metadata({ data: "json, name=billingGroupId" })
  billingGroupId?: string;

  @Metadata({ data: "json, name=billingGroupMetadata" })
  billingGroupMetadata?: BillingGroupMetadata;

  @Metadata({ data: "json, name=billingGroupName" })
  billingGroupName?: string;

  @Metadata({ data: "json, name=billingGroupProperties" })
  billingGroupProperties?: BillingGroupProperties;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
