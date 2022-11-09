import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SecurityStyleEnum } from "./securitystyleenum";
import { TieringPolicy } from "./tieringpolicy";


// UpdateOntapVolumeConfiguration
/** 
 * Used to specify changes to the ONTAP configuration for the volume you are updating.
**/
export class UpdateOntapVolumeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=JunctionPath" })
  junctionPath?: string;

  @Metadata({ data: "json, name=SecurityStyle" })
  securityStyle?: SecurityStyleEnum;

  @Metadata({ data: "json, name=SizeInMegabytes" })
  sizeInMegabytes?: number;

  @Metadata({ data: "json, name=StorageEfficiencyEnabled" })
  storageEfficiencyEnabled?: boolean;

  @Metadata({ data: "json, name=TieringPolicy" })
  tieringPolicy?: TieringPolicy;
}
