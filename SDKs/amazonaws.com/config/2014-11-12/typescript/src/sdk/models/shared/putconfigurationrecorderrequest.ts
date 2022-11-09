import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationRecorder } from "./configurationrecorder";


// PutConfigurationRecorderRequest
/** 
 * The input for the <a>PutConfigurationRecorder</a> action.
**/
export class PutConfigurationRecorderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationRecorder" })
  configurationRecorder: ConfigurationRecorder;
}
