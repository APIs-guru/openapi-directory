import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EbsBlockDeviceConfig } from "./ebsblockdeviceconfig";



// EbsConfiguration
/** 
 * The Amazon EBS configuration of a cluster instance.
**/
export class EbsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EbsBlockDeviceConfigs", elemType: EbsBlockDeviceConfig })
  ebsBlockDeviceConfigs?: EbsBlockDeviceConfig[];

  @SpeakeasyMetadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;
}
