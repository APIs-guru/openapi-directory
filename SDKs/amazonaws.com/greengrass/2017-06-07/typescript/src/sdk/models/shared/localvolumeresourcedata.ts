import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupOwnerSetting } from "./groupownersetting";


// LocalVolumeResourceData
/** 
 * Attributes that define a local volume resource.
**/
export class LocalVolumeResourceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationPath" })
  destinationPath?: string;

  @Metadata({ data: "json, name=GroupOwnerSetting" })
  groupOwnerSetting?: GroupOwnerSetting;

  @Metadata({ data: "json, name=SourcePath" })
  sourcePath?: string;
}
