import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SecurityStyleEnum } from "./securitystyleenum";
import { TieringPolicy } from "./tieringpolicy";


// CreateOntapVolumeConfiguration
/** 
 * Specifies the configuration of the ONTAP volume that you are creating.
**/
export class CreateOntapVolumeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=JunctionPath" })
  junctionPath: string;

  @Metadata({ data: "json, name=SecurityStyle" })
  securityStyle?: SecurityStyleEnum;

  @Metadata({ data: "json, name=SizeInMegabytes" })
  sizeInMegabytes: number;

  @Metadata({ data: "json, name=StorageEfficiencyEnabled" })
  storageEfficiencyEnabled: boolean;

  @Metadata({ data: "json, name=StorageVirtualMachineId" })
  storageVirtualMachineId: string;

  @Metadata({ data: "json, name=TieringPolicy" })
  tieringPolicy?: TieringPolicy;
}
