import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Compatibility } from "./compatibility";
/**
 * Information about an add-on version.
**/
export declare class AddonVersionInfo extends SpeakeasyBase {
    addonVersion?: string;
    architecture?: string[];
    compatibilities?: Compatibility[];
}
