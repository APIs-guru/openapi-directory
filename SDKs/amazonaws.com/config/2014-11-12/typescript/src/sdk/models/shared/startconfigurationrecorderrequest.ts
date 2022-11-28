import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartConfigurationRecorderRequest
/** 
 * The input for the <a>StartConfigurationRecorder</a> action.
**/
export class StartConfigurationRecorderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationRecorderName" })
  configurationRecorderName: string;
}
