import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcknowledgeActionConfiguration
/** 
 * Contains the configuration information of an acknowledge action.
**/
export class AcknowledgeActionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=note" })
  note?: string;
}
