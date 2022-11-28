import { SpeakeasyBase } from "../../../internal/utils";
import { LocationState } from "./locationstate";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class CreateFleetLocationsOutput extends SpeakeasyBase {
    fleetArn?: string;
    fleetId?: string;
    locationStates?: LocationState[];
}
