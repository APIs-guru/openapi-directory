import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopConfigurationRecorderRequest
/** 
 * The input for the <a>StopConfigurationRecorder</a> action.
**/
export class StopConfigurationRecorderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationRecorderName" })
  configurationRecorderName: string;
}
