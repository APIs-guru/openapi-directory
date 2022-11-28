import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteFleetInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteFleetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;
}
