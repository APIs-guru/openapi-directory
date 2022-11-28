import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupOwnerSetting } from "./groupownersetting";



// LocalDeviceResourceData
/** 
 * Attributes that define a local device resource.
**/
export class LocalDeviceResourceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupOwnerSetting" })
  groupOwnerSetting?: GroupOwnerSetting;

  @SpeakeasyMetadata({ data: "json, name=SourcePath" })
  sourcePath?: string;
}
