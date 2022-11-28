import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VCpuInfo
/** 
 * Describes the vCPU configurations for the instance type.
**/
export class VCpuInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultCores?: number;

  @SpeakeasyMetadata()
  defaultThreadsPerCore?: number;

  @SpeakeasyMetadata()
  defaultVCpus?: number;

  @SpeakeasyMetadata()
  validCores?: number[];

  @SpeakeasyMetadata()
  validThreadsPerCore?: number[];
}
