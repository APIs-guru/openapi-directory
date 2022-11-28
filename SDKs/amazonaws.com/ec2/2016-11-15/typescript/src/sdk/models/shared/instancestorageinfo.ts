import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskInfo } from "./diskinfo";
import { EphemeralNvmeSupportEnum } from "./ephemeralnvmesupportenum";



// InstanceStorageInfo
/** 
 * Describes the disks that are available for the instance type.
**/
export class InstanceStorageInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DiskInfo })
  disks?: DiskInfo[];

  @SpeakeasyMetadata()
  nvmeSupport?: EphemeralNvmeSupportEnum;

  @SpeakeasyMetadata()
  totalSizeInGb?: number;
}
