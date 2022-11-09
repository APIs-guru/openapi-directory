import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DevicePlatformEnum } from "./deviceplatformenum";
import { RecurringCharge } from "./recurringcharge";
import { OfferingTypeEnum } from "./offeringtypeenum";


// Offering
/** 
 * Represents the metadata of a device offering.
**/
export class Offering extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: DevicePlatformEnum;

  @Metadata({ data: "json, name=recurringCharges", elemType: shared.RecurringCharge })
  recurringCharges?: RecurringCharge[];

  @Metadata({ data: "json, name=type" })
  type?: OfferingTypeEnum;
}
