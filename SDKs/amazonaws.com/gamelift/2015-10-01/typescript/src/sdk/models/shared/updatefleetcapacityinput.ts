import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateFleetCapacityInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateFleetCapacityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DesiredInstances" })
  desiredInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxSize" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=MinSize" })
  minSize?: number;
}
