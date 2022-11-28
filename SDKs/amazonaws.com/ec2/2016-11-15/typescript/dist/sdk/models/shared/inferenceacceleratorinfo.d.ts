import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceDeviceInfo } from "./inferencedeviceinfo";
/**
 * Describes the Inference accelerators for the instance type.
**/
export declare class InferenceAcceleratorInfo extends SpeakeasyBase {
    accelerators?: InferenceDeviceInfo[];
}
