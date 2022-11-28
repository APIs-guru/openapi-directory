import { SpeakeasyBase } from "../../../internal/utils";
import { Preset } from "./preset";
/**
 * The <code>ListPresetsResponse</code> structure.
**/
export declare class ListPresetsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    presets?: Preset[];
}
