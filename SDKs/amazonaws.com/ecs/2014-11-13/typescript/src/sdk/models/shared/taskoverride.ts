import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerOverride } from "./containeroverride";
import { EphemeralStorage } from "./ephemeralstorage";
import { InferenceAcceleratorOverride } from "./inferenceacceleratoroverride";


// TaskOverride
/** 
 * The overrides associated with a task.
**/
export class TaskOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerOverrides", elemType: shared.ContainerOverride })
  containerOverrides?: ContainerOverride[];

  @Metadata({ data: "json, name=cpu" })
  cpu?: string;

  @Metadata({ data: "json, name=ephemeralStorage" })
  ephemeralStorage?: EphemeralStorage;

  @Metadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=inferenceAcceleratorOverrides", elemType: shared.InferenceAcceleratorOverride })
  inferenceAcceleratorOverrides?: InferenceAcceleratorOverride[];

  @Metadata({ data: "json, name=memory" })
  memory?: string;

  @Metadata({ data: "json, name=taskRoleArn" })
  taskRoleArn?: string;
}
