import { SpeakeasyBase } from "../../../internal/utils";
import { OfferingStatus } from "./offeringstatus";
/**
 * Returns the status result for a device offering.
**/
export declare class GetOfferingStatusResult extends SpeakeasyBase {
    current?: Map<string, OfferingStatus>;
    nextPeriod?: Map<string, OfferingStatus>;
    nextToken?: string;
}
