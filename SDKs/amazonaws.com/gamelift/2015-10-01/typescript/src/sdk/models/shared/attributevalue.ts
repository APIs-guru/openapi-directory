import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttributeValue
/** 
 * Values for use in <a>Player</a> attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties.
**/
export class AttributeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=N" })
  n?: number;

  @Metadata({ data: "json, name=S" })
  s?: string;

  @Metadata({ data: "json, name=SDM" })
  sdm?: Map<string, number>;

  @Metadata({ data: "json, name=SL" })
  sl?: string[];
}
