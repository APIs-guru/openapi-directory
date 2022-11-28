import { SpeakeasyBase } from "../../../internal/utils";
import { RadiusSettings } from "./radiussettings";
/**
 * Contains the inputs for the <a>UpdateRadius</a> operation.
**/
export declare class UpdateRadiusRequest extends SpeakeasyBase {
    directoryId: string;
    radiusSettings: RadiusSettings;
}
