import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteConfigurationRecorderRequest
/** 
 * The request object for the <code>DeleteConfigurationRecorder</code> action.
**/
export class DeleteConfigurationRecorderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationRecorderName" })
  configurationRecorderName: string;
}
