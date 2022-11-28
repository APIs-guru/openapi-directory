import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LaunchTemplateCpuOptions
/** 
 * The CPU options for the instance.
**/
export class LaunchTemplateCpuOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  coreCount?: number;

  @SpeakeasyMetadata()
  threadsPerCore?: number;
}
