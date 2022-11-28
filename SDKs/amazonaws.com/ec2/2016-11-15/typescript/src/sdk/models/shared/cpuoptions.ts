import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CpuOptions
/** 
 * The CPU options for the instance.
**/
export class CpuOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  coreCount?: number;

  @SpeakeasyMetadata()
  threadsPerCore?: number;
}
