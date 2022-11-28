import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";
import { OfferingStatus } from "./offeringstatus";



// OfferingTransaction
/** 
 * Represents the metadata of an offering transaction.
**/
export class OfferingTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: MonetaryAmount;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=offeringPromotionId" })
  offeringPromotionId?: string;

  @SpeakeasyMetadata({ data: "json, name=offeringStatus" })
  offeringStatus?: OfferingStatus;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
