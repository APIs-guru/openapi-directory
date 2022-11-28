import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetPropertyVariant
/** 
 * Contains an asset property value (of a single type).
**/
export class AssetPropertyVariant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: string;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: string;

  @SpeakeasyMetadata({ data: "json, name=integerValue" })
  integerValue?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
