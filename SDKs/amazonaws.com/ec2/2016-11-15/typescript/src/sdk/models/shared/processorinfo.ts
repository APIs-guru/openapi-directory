import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureTypeEnum } from "./architecturetypeenum";



// ProcessorInfo
/** 
 * Describes the processor used by the instance type.
**/
export class ProcessorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  supportedArchitectures?: ArchitectureTypeEnum[];

  @SpeakeasyMetadata()
  sustainedClockSpeedInGhz?: number;
}
