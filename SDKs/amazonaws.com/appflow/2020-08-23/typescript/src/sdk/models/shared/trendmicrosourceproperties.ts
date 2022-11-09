import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrendmicroSourceProperties
/** 
 *  The properties that are applied when using Trend Micro as a flow source. 
**/
export class TrendmicroSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object: string;
}
