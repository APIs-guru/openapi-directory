import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributeValue
/** 
 * Values for use in <a>Player</a> attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties.
**/
export class AttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=N" })
  n?: number;

  @SpeakeasyMetadata({ data: "json, name=S" })
  s?: string;

  @SpeakeasyMetadata({ data: "json, name=SDM" })
  sdm?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=SL" })
  sl?: string[];
}
