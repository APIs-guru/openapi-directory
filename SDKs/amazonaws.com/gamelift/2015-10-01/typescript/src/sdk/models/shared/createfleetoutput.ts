import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetAttributes } from "./fleetattributes";
import { LocationState } from "./locationstate";



// CreateFleetOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateFleetOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetAttributes" })
  fleetAttributes?: FleetAttributes;

  @SpeakeasyMetadata({ data: "json, name=LocationStates", elemType: LocationState })
  locationStates?: LocationState[];
}
