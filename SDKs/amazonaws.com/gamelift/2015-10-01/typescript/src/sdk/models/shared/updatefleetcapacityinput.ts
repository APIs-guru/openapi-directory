import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateFleetCapacityInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateFleetCapacityInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DesiredInstances" })
  desiredInstances?: number;

  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=MaxSize" })
  maxSize?: number;

  @Metadata({ data: "json, name=MinSize" })
  minSize?: number;
}
