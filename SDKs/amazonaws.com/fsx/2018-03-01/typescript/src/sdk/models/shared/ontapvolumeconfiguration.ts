import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlexCacheEndpointTypeEnum } from "./flexcacheendpointtypeenum";
import { OntapVolumeTypeEnum } from "./ontapvolumetypeenum";
import { SecurityStyleEnum } from "./securitystyleenum";
import { TieringPolicy } from "./tieringpolicy";


// OntapVolumeConfiguration
/** 
 * The configuration of an Amazon FSx for NetApp ONTAP volume
**/
export class OntapVolumeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=FlexCacheEndpointType" })
  flexCacheEndpointType?: FlexCacheEndpointTypeEnum;

  @Metadata({ data: "json, name=JunctionPath" })
  junctionPath?: string;

  @Metadata({ data: "json, name=OntapVolumeType" })
  ontapVolumeType?: OntapVolumeTypeEnum;

  @Metadata({ data: "json, name=SecurityStyle" })
  securityStyle?: SecurityStyleEnum;

  @Metadata({ data: "json, name=SizeInMegabytes" })
  sizeInMegabytes?: number;

  @Metadata({ data: "json, name=StorageEfficiencyEnabled" })
  storageEfficiencyEnabled?: boolean;

  @Metadata({ data: "json, name=StorageVirtualMachineId" })
  storageVirtualMachineId?: string;

  @Metadata({ data: "json, name=StorageVirtualMachineRoot" })
  storageVirtualMachineRoot?: boolean;

  @Metadata({ data: "json, name=TieringPolicy" })
  tieringPolicy?: TieringPolicy;

  @Metadata({ data: "json, name=UUID" })
  uuid?: string;
}
