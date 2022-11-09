import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetActionEnum } from "./fleetactionenum";


// StopFleetActionsInput
/** 
 * Represents the input for a request operation.
**/
export class StopFleetActionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions" })
  actions: FleetActionEnum[];

  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;
}
