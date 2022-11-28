import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Offering } from "./offering";
import { OfferingTransactionTypeEnum } from "./offeringtransactiontypeenum";



// OfferingStatus
/** 
 * The status of the offering.
**/
export class OfferingStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveOn" })
  effectiveOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=offering" })
  offering?: Offering;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OfferingTransactionTypeEnum;
}
