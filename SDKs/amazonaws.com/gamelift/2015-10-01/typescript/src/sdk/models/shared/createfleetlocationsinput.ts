import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocationConfiguration } from "./locationconfiguration";


// CreateFleetLocationsInput
/** 
 * Represents the input for a request operation.
**/
export class CreateFleetLocationsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=Locations", elemType: shared.LocationConfiguration })
  locations: LocationConfiguration[];
}
