import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BillingGroupMetadata
/** 
 * Additional information about the billing group.
**/
export class BillingGroupMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;
}
