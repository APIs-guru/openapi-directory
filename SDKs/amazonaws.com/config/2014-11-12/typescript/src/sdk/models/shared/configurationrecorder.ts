import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordingGroup } from "./recordinggroup";



// ConfigurationRecorder
/** 
 * An object that represents the recording of configuration changes of an Amazon Web Services resource.
**/
export class ConfigurationRecorder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recordingGroup" })
  recordingGroup?: RecordingGroup;

  @SpeakeasyMetadata({ data: "json, name=roleARN" })
  roleArn?: string;
}
