import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityStyleEnum } from "./securitystyleenum";
import { TieringPolicy } from "./tieringpolicy";



// CreateOntapVolumeConfiguration
/** 
 * Specifies the configuration of the ONTAP volume that you are creating.
**/
export class CreateOntapVolumeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JunctionPath" })
  junctionPath: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityStyle" })
  securityStyle?: SecurityStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=SizeInMegabytes" })
  sizeInMegabytes: number;

  @SpeakeasyMetadata({ data: "json, name=StorageEfficiencyEnabled" })
  storageEfficiencyEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=StorageVirtualMachineId" })
  storageVirtualMachineId: string;

  @SpeakeasyMetadata({ data: "json, name=TieringPolicy" })
  tieringPolicy?: TieringPolicy;
}
