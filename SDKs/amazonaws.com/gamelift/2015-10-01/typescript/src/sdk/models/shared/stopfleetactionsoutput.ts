import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopFleetActionsOutput
/** 
 * Represents the input for a request operation.
**/
export class StopFleetActionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;
}
