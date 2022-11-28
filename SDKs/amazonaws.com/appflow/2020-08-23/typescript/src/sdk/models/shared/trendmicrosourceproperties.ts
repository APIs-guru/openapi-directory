import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrendmicroSourceProperties
/** 
 *  The properties that are applied when using Trend Micro as a flow source. 
**/
export class TrendmicroSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
