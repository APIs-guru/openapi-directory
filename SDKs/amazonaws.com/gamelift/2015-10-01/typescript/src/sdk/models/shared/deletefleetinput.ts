import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteFleetInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteFleetInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;
}
