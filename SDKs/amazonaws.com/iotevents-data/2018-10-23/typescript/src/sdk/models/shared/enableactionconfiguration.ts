import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnableActionConfiguration
/** 
 * Contains the configuration information of an enable action.
**/
export class EnableActionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;
}
