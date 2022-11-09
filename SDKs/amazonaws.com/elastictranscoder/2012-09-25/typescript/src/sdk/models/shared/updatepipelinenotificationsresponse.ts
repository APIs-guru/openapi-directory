import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Pipeline } from "./pipeline";


// UpdatePipelineNotificationsResponse
/** 
 * The <code>UpdatePipelineNotificationsResponse</code> structure.
**/
export class UpdatePipelineNotificationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Pipeline" })
  pipeline?: Pipeline;
}
