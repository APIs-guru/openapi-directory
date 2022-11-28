import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertyTimestamp } from "./assetpropertytimestamp";
import { AssetPropertyVariant } from "./assetpropertyvariant";



// AssetPropertyValue
/** 
 * An asset property value entry containing the following information.
**/
export class AssetPropertyValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: AssetPropertyTimestamp;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: AssetPropertyVariant;
}
