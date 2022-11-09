import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OfferingStatus } from "./offeringstatus";
import { OfferingStatus } from "./offeringstatus";


// GetOfferingStatusResult
/** 
 * Returns the status result for a device offering.
**/
export class GetOfferingStatusResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=current", elemType: shared.OfferingStatus })
  current?: Map<string, OfferingStatus>;

  @Metadata({ data: "json, name=nextPeriod", elemType: shared.OfferingStatus })
  nextPeriod?: Map<string, OfferingStatus>;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
