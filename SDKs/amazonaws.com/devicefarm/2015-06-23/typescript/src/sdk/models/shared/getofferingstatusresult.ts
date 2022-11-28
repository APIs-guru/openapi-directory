import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OfferingStatus } from "./offeringstatus";



// GetOfferingStatusResult
/** 
 * Returns the status result for a device offering.
**/
export class GetOfferingStatusResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current", elemType: OfferingStatus })
  current?: Map<string, OfferingStatus>;

  @SpeakeasyMetadata({ data: "json, name=nextPeriod", elemType: OfferingStatus })
  nextPeriod?: Map<string, OfferingStatus>;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
