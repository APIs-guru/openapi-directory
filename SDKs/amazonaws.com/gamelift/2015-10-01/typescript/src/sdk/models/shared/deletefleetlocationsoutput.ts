import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocationState } from "./locationstate";


// DeleteFleetLocationsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DeleteFleetLocationsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=LocationStates", elemType: shared.LocationState })
  locationStates?: LocationState[];
}
