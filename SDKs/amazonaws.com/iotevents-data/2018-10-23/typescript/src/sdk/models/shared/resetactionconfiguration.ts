import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResetActionConfiguration
/** 
 * Contains the configuration information of a reset action.
**/
export class ResetActionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;
}
