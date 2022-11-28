import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationConfiguration } from "./locationconfiguration";



// CreateFleetLocationsInput
/** 
 * Represents the input for a request operation.
**/
export class CreateFleetLocationsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=Locations", elemType: LocationConfiguration })
  locations: LocationConfiguration[];
}
