import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartFleetActionsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class StartFleetActionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;
}
