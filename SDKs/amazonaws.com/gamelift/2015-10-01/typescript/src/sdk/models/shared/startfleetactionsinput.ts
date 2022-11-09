import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetActionEnum } from "./fleetactionenum";


// StartFleetActionsInput
/** 
 * Represents the input for a request operation.
**/
export class StartFleetActionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions" })
  actions: FleetActionEnum[];

  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;
}
