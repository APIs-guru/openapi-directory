import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FleetAttributes } from "./fleetattributes";
import { LocationState } from "./locationstate";


// CreateFleetOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateFleetOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetAttributes" })
  fleetAttributes?: FleetAttributes;

  @Metadata({ data: "json, name=LocationStates", elemType: shared.LocationState })
  locationStates?: LocationState[];
}
