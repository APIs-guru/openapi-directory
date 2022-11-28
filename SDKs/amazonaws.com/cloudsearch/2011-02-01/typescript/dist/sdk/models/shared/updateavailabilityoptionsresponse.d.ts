import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityOptionsStatus } from "./availabilityoptionsstatus";
/**
 * The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options.
**/
export declare class UpdateAvailabilityOptionsResponse extends SpeakeasyBase {
    availabilityOptions?: AvailabilityOptionsStatus;
}
