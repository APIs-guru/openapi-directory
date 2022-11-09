import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteConfigurationRecorderRequest
/** 
 * The request object for the <code>DeleteConfigurationRecorder</code> action.
**/
export class DeleteConfigurationRecorderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationRecorderName" })
  configurationRecorderName: string;
}
