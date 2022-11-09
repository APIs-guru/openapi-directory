import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Offering } from "./offering";
import { OfferingTransactionTypeEnum } from "./offeringtransactiontypeenum";


// OfferingStatus
/** 
 * The status of the offering.
**/
export class OfferingStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectiveOn" })
  effectiveOn?: Date;

  @Metadata({ data: "json, name=offering" })
  offering?: Offering;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=type" })
  type?: OfferingTransactionTypeEnum;
}
