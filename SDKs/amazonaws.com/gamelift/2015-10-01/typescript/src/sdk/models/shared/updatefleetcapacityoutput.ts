import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateFleetCapacityOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateFleetCapacityOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;
}
