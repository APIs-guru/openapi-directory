import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopFleetActionsOutput
/** 
 * Represents the input for a request operation.
**/
export class StopFleetActionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;
}
