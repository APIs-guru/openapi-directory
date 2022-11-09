import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EbsBlockDeviceConfig } from "./ebsblockdeviceconfig";


// EbsConfiguration
/** 
 * The Amazon EBS configuration of a cluster instance.
**/
export class EbsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=EbsBlockDeviceConfigs", elemType: shared.EbsBlockDeviceConfig })
  ebsBlockDeviceConfigs?: EbsBlockDeviceConfig[];

  @Metadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;
}
