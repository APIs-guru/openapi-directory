import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupOwnerSetting } from "./groupownersetting";


// LocalDeviceResourceData
/** 
 * Attributes that define a local device resource.
**/
export class LocalDeviceResourceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupOwnerSetting" })
  groupOwnerSetting?: GroupOwnerSetting;

  @Metadata({ data: "json, name=SourcePath" })
  sourcePath?: string;
}
