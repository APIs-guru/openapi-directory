import { SpeakeasyBase } from "../../../internal/utils";
import { LocationConfiguration } from "./locationconfiguration";
/**
 * Represents the input for a request operation.
**/
export declare class CreateFleetLocationsInput extends SpeakeasyBase {
    fleetId: string;
    locations: LocationConfiguration[];
}
