import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateFleetAttributesOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateFleetAttributesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;
}
