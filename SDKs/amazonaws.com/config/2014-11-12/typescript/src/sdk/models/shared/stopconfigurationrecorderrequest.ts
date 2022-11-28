import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopConfigurationRecorderRequest
/** 
 * The input for the <a>StopConfigurationRecorder</a> action.
**/
export class StopConfigurationRecorderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationRecorderName" })
  configurationRecorderName: string;
}
