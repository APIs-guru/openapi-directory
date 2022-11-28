import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InferenceDeviceInfo
/** 
 * Describes the Inference accelerators for the instance type.
**/
export class InferenceDeviceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  count?: number;

  @SpeakeasyMetadata()
  manufacturer?: string;

  @SpeakeasyMetadata()
  name?: string;
}
