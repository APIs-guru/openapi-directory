import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AntennaDemodDecodeDetails } from "./antennademoddecodedetails";
import { EndpointDetails } from "./endpointdetails";
import { S3RecordingDetails } from "./s3recordingdetails";



// ConfigDetails
/** 
 * Details for certain <code>Config</code> object types in a contact.
**/
export class ConfigDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=antennaDemodDecodeDetails" })
  antennaDemodDecodeDetails?: AntennaDemodDecodeDetails;

  @SpeakeasyMetadata({ data: "json, name=endpointDetails" })
  endpointDetails?: EndpointDetails;

  @SpeakeasyMetadata({ data: "json, name=s3RecordingDetails" })
  s3RecordingDetails?: S3RecordingDetails;
}
