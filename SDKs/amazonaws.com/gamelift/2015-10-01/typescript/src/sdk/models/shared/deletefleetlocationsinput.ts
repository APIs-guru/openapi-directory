import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteFleetLocationsInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteFleetLocationsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=Locations" })
  locations: string[];
}
