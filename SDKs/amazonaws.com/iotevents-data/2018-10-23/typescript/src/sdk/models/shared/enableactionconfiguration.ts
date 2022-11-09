import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnableActionConfiguration
/** 
 * Contains the configuration information of an enable action.
**/
export class EnableActionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=note" })
  note?: string;
}
