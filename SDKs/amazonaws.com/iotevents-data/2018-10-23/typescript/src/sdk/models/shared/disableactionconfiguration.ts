import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisableActionConfiguration
/** 
 * Contains the configuration information of a disable action.
**/
export class DisableActionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=note" })
  note?: string;
}
