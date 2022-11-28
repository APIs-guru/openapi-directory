import { SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertyTimestamp } from "./assetpropertytimestamp";
import { AssetPropertyVariant } from "./assetpropertyvariant";
/**
 * An asset property value entry containing the following information.
**/
export declare class AssetPropertyValue extends SpeakeasyBase {
    quality?: string;
    timestamp: AssetPropertyTimestamp;
    value: AssetPropertyVariant;
}
