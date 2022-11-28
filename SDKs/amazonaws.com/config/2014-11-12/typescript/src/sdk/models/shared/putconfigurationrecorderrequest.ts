import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationRecorder } from "./configurationrecorder";



// PutConfigurationRecorderRequest
/** 
 * The input for the <a>PutConfigurationRecorder</a> action.
**/
export class PutConfigurationRecorderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationRecorder" })
  configurationRecorder: ConfigurationRecorder;
}
