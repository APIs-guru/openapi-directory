import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationState } from "./locationstate";



// DeleteFleetLocationsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DeleteFleetLocationsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationStates", elemType: LocationState })
  locationStates?: LocationState[];
}
