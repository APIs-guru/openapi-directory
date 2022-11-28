import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetActionEnum } from "./fleetactionenum";



// StartFleetActionsInput
/** 
 * Represents the input for a request operation.
**/
export class StartFleetActionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Actions" })
  actions: FleetActionEnum[];

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;
}
