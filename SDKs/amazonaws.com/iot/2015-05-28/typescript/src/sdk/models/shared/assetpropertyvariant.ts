import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetPropertyVariant
/** 
 * Contains an asset property value (of a single type).
**/
export class AssetPropertyVariant extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: string;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: string;

  @Metadata({ data: "json, name=integerValue" })
  integerValue?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
