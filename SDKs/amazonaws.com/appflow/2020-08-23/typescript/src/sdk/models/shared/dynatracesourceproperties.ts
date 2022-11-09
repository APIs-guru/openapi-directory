import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DynatraceSourceProperties
/** 
 *  The properties that are applied when Dynatrace is being used as a source. 
**/
export class DynatraceSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object: string;
}
