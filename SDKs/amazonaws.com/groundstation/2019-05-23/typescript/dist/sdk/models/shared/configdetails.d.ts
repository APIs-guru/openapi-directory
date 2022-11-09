import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AntennaDemodDecodeDetails } from "./antennademoddecodedetails";
import { EndpointDetails } from "./endpointdetails";
import { S3RecordingDetails } from "./s3recordingdetails";
/**
 * Details for certain <code>Config</code> object types in a contact.
**/
export declare class ConfigDetails extends SpeakeasyBase {
    antennaDemodDecodeDetails?: AntennaDemodDecodeDetails;
    endpointDetails?: EndpointDetails;
    s3RecordingDetails?: S3RecordingDetails;
}
