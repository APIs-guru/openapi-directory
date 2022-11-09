import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatadogSourceProperties
/** 
 *  The properties that are applied when Datadog is being used as a source. 
**/
export class DatadogSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object: string;
}
