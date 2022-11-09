import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteFleetLocationsInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteFleetLocationsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=Locations" })
  locations: string[];
}
