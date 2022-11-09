import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonetaryAmount } from "./monetaryamount";
import { OfferingStatus } from "./offeringstatus";


// OfferingTransaction
/** 
 * Represents the metadata of an offering transaction.
**/
export class OfferingTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=cost" })
  cost?: MonetaryAmount;

  @Metadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @Metadata({ data: "json, name=offeringPromotionId" })
  offeringPromotionId?: string;

  @Metadata({ data: "json, name=offeringStatus" })
  offeringStatus?: OfferingStatus;

  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
