import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerOverride } from "./containeroverride";
import { EphemeralStorage } from "./ephemeralstorage";
import { InferenceAcceleratorOverride } from "./inferenceacceleratoroverride";
/**
 * The overrides associated with a task.
**/
export declare class TaskOverride extends SpeakeasyBase {
    containerOverrides?: ContainerOverride[];
    cpu?: string;
    ephemeralStorage?: EphemeralStorage;
    executionRoleArn?: string;
    inferenceAcceleratorOverrides?: InferenceAcceleratorOverride[];
    memory?: string;
    taskRoleArn?: string;
}
