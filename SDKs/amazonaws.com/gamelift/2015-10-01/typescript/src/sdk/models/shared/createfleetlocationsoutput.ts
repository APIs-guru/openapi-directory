import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocationState } from "./locationstate";


// CreateFleetLocationsOutput
/** 
 * Represents the returned data in response to a request operation. 
**/
export class CreateFleetLocationsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=LocationStates", elemType: shared.LocationState })
  locationStates?: LocationState[];
}
