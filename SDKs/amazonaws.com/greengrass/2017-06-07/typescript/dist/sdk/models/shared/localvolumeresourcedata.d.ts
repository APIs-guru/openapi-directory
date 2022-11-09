import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupOwnerSetting } from "./groupownersetting";
/**
 * Attributes that define a local volume resource.
**/
export declare class LocalVolumeResourceData extends SpeakeasyBase {
    destinationPath?: string;
    groupOwnerSetting?: GroupOwnerSetting;
    sourcePath?: string;
}
