import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetPropertyTimestamp } from "./assetpropertytimestamp";
import { AssetPropertyVariant } from "./assetpropertyvariant";


// AssetPropertyValue
/** 
 * An asset property value entry containing the following information.
**/
export class AssetPropertyValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: AssetPropertyTimestamp;

  @Metadata({ data: "json, name=value" })
  value: AssetPropertyVariant;
}
