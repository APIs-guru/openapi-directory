import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateFleetCapacityOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateFleetCapacityOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;
}
