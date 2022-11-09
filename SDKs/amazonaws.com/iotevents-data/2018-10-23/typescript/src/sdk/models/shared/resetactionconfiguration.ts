import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResetActionConfiguration
/** 
 * Contains the configuration information of a reset action.
**/
export class ResetActionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=note" })
  note?: string;
}
