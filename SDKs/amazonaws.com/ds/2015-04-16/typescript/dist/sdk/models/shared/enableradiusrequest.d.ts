import { SpeakeasyBase } from "../../../internal/utils";
import { RadiusSettings } from "./radiussettings";
/**
 * Contains the inputs for the <a>EnableRadius</a> operation.
**/
export declare class EnableRadiusRequest extends SpeakeasyBase {
    directoryId: string;
    radiusSettings: RadiusSettings;
}
