import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordingGroup } from "./recordinggroup";


// ConfigurationRecorder
/** 
 * An object that represents the recording of configuration changes of an Amazon Web Services resource.
**/
export class ConfigurationRecorder extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=recordingGroup" })
  recordingGroup?: RecordingGroup;

  @Metadata({ data: "json, name=roleARN" })
  roleArn?: string;
}
