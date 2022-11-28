import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskTypeEnum } from "./disktypeenum";



// DiskInfo
/** 
 * Describes the disk.
**/
export class DiskInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  count?: number;

  @SpeakeasyMetadata()
  sizeInGb?: number;

  @SpeakeasyMetadata()
  type?: DiskTypeEnum;
}
