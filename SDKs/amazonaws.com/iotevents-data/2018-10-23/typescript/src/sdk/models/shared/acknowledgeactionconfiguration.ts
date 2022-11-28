import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcknowledgeActionConfiguration
/** 
 * Contains the configuration information of an acknowledge action.
**/
export class AcknowledgeActionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;
}
