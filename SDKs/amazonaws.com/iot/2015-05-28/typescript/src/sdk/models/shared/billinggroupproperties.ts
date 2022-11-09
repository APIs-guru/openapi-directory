import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BillingGroupProperties
/** 
 * The properties of a billing group.
**/
export class BillingGroupProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingGroupDescription" })
  billingGroupDescription?: string;
}
