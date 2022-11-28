import { SpeakeasyBase } from "../../../internal/utils";
import { RecordingGroup } from "./recordinggroup";
/**
 * An object that represents the recording of configuration changes of an Amazon Web Services resource.
**/
export declare class ConfigurationRecorder extends SpeakeasyBase {
    name?: string;
    recordingGroup?: RecordingGroup;
    roleArn?: string;
}
