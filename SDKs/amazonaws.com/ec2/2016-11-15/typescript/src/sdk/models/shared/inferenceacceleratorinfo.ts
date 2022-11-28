import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceDeviceInfo } from "./inferencedeviceinfo";



// InferenceAcceleratorInfo
/** 
 * Describes the Inference accelerators for the instance type.
**/
export class InferenceAcceleratorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InferenceDeviceInfo })
  accelerators?: InferenceDeviceInfo[];
}
