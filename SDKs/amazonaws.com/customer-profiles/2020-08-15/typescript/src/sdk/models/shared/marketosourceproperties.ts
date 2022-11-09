import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MarketoSourceProperties
/** 
 * The properties that are applied when Marketo is being used as a source.
**/
export class MarketoSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Object" })
  object: string;
}
