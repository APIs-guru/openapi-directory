import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BillingGroupProperties
/** 
 * The properties of a billing group.
**/
export class BillingGroupProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingGroupDescription" })
  billingGroupDescription?: string;
}
