import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceTemplate } from "./devicetemplate";
/**
 * An object defining the template for a placement.
**/
export declare class PlacementTemplate extends SpeakeasyBase {
    defaultAttributes?: Map<string, string>;
    deviceTemplates?: Map<string, DeviceTemplate>;
}
