import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlexCacheEndpointTypeEnum } from "./flexcacheendpointtypeenum";
import { OntapVolumeTypeEnum } from "./ontapvolumetypeenum";
import { SecurityStyleEnum } from "./securitystyleenum";
import { TieringPolicy } from "./tieringpolicy";



// OntapVolumeConfiguration
/** 
 * The configuration of an Amazon FSx for NetApp ONTAP volume
**/
export class OntapVolumeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FlexCacheEndpointType" })
  flexCacheEndpointType?: FlexCacheEndpointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=JunctionPath" })
  junctionPath?: string;

  @SpeakeasyMetadata({ data: "json, name=OntapVolumeType" })
  ontapVolumeType?: OntapVolumeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SecurityStyle" })
  securityStyle?: SecurityStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=SizeInMegabytes" })
  sizeInMegabytes?: number;

  @SpeakeasyMetadata({ data: "json, name=StorageEfficiencyEnabled" })
  storageEfficiencyEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=StorageVirtualMachineId" })
  storageVirtualMachineId?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageVirtualMachineRoot" })
  storageVirtualMachineRoot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TieringPolicy" })
  tieringPolicy?: TieringPolicy;

  @SpeakeasyMetadata({ data: "json, name=UUID" })
  uuid?: string;
}
