import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupOwnerSetting } from "./groupownersetting";



// LocalVolumeResourceData
/** 
 * Attributes that define a local volume resource.
**/
export class LocalVolumeResourceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationPath" })
  destinationPath?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupOwnerSetting" })
  groupOwnerSetting?: GroupOwnerSetting;

  @SpeakeasyMetadata({ data: "json, name=SourcePath" })
  sourcePath?: string;
}
