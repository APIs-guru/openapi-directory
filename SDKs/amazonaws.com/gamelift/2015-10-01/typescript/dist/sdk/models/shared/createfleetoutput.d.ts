import { SpeakeasyBase } from "../../../internal/utils";
import { FleetAttributes } from "./fleetattributes";
import { LocationState } from "./locationstate";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class CreateFleetOutput extends SpeakeasyBase {
    fleetAttributes?: FleetAttributes;
    locationStates?: LocationState[];
}
