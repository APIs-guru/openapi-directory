import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";



// UpdatePipelineNotificationsResponse
/** 
 * The <code>UpdatePipelineNotificationsResponse</code> structure.
**/
export class UpdatePipelineNotificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Pipeline" })
  pipeline?: Pipeline;
}
