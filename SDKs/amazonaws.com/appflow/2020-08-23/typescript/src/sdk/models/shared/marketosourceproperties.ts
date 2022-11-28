import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MarketoSourceProperties
/** 
 *  The properties that are applied when Marketo is being used as a source. 
**/
export class MarketoSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
