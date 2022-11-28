import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationState } from "./locationstate";



// CreateFleetLocationsOutput
/** 
 * Represents the returned data in response to a request operation. 
**/
export class CreateFleetLocationsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationStates", elemType: LocationState })
  locationStates?: LocationState[];
}
