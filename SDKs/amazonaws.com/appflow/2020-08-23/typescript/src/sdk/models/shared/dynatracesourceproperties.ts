import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DynatraceSourceProperties
/** 
 *  The properties that are applied when Dynatrace is being used as a source. 
**/
export class DynatraceSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
