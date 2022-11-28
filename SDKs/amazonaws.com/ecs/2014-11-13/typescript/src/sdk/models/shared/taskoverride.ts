import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerOverride } from "./containeroverride";
import { EphemeralStorage } from "./ephemeralstorage";
import { InferenceAcceleratorOverride } from "./inferenceacceleratoroverride";



// TaskOverride
/** 
 * The overrides associated with a task.
**/
export class TaskOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerOverrides", elemType: ContainerOverride })
  containerOverrides?: ContainerOverride[];

  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: string;

  @SpeakeasyMetadata({ data: "json, name=ephemeralStorage" })
  ephemeralStorage?: EphemeralStorage;

  @SpeakeasyMetadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=inferenceAcceleratorOverrides", elemType: InferenceAcceleratorOverride })
  inferenceAcceleratorOverrides?: InferenceAcceleratorOverride[];

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: string;

  @SpeakeasyMetadata({ data: "json, name=taskRoleArn" })
  taskRoleArn?: string;
}
