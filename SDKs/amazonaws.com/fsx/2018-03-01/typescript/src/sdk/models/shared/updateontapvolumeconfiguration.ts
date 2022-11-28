import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityStyleEnum } from "./securitystyleenum";
import { TieringPolicy } from "./tieringpolicy";



// UpdateOntapVolumeConfiguration
/** 
 * Used to specify changes to the ONTAP configuration for the volume you are updating.
**/
export class UpdateOntapVolumeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JunctionPath" })
  junctionPath?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityStyle" })
  securityStyle?: SecurityStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=SizeInMegabytes" })
  sizeInMegabytes?: number;

  @SpeakeasyMetadata({ data: "json, name=StorageEfficiencyEnabled" })
  storageEfficiencyEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TieringPolicy" })
  tieringPolicy?: TieringPolicy;
}
