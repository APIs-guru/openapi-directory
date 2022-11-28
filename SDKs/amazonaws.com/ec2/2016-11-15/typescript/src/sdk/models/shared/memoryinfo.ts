import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MemoryInfo
/** 
 * Describes the memory for the instance type.
**/
export class MemoryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sizeInMiB?: number;
}
