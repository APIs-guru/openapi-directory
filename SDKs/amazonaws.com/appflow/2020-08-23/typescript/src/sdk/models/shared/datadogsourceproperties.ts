import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatadogSourceProperties
/** 
 *  The properties that are applied when Datadog is being used as a source. 
**/
export class DatadogSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
