import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateFleetPortSettingsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateFleetPortSettingsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;
}
