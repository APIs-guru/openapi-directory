import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevicePlatformEnum } from "./deviceplatformenum";
import { RecurringCharge } from "./recurringcharge";
import { OfferingTypeEnum } from "./offeringtypeenum";



// Offering
/** 
 * Represents the metadata of a device offering.
**/
export class Offering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: DevicePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=recurringCharges", elemType: RecurringCharge })
  recurringCharges?: RecurringCharge[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OfferingTypeEnum;
}
