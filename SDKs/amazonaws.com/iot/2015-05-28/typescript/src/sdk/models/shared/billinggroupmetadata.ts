import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BillingGroupMetadata
/** 
 * Additional information about the billing group.
**/
export class BillingGroupMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;
}
