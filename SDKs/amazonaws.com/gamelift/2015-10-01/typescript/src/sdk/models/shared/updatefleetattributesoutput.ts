import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateFleetAttributesOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateFleetAttributesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;
}
