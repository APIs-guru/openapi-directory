import { SpeakeasyBase } from "../../../internal/utils";
import { AddonVersionInfo } from "./addonversioninfo";
/**
 * Information about an add-on.
**/
export declare class AddonInfo extends SpeakeasyBase {
    addonName?: string;
    addonVersions?: AddonVersionInfo[];
    type?: string;
}
