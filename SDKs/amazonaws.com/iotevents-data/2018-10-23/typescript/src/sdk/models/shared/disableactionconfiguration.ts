import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisableActionConfiguration
/** 
 * Contains the configuration information of a disable action.
**/
export class DisableActionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;
}
