import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartConfigurationRecorderRequest
/** 
 * The input for the <a>StartConfigurationRecorder</a> action.
**/
export class StartConfigurationRecorderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationRecorderName" })
  configurationRecorderName: string;
}
