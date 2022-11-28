import { SpeakeasyBase } from "../../../internal/utils";
import { BillingGroupMetadata } from "./billinggroupmetadata";
import { BillingGroupProperties } from "./billinggroupproperties";
export declare class DescribeBillingGroupResponse extends SpeakeasyBase {
    billingGroupArn?: string;
    billingGroupId?: string;
    billingGroupMetadata?: BillingGroupMetadata;
    billingGroupName?: string;
    billingGroupProperties?: BillingGroupProperties;
    version?: number;
}
