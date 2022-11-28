import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AntennaDownlinkConfig } from "./antennadownlinkconfig";
import { AntennaDownlinkDemodDecodeConfig } from "./antennadownlinkdemoddecodeconfig";
import { AntennaUplinkConfig } from "./antennauplinkconfig";
import { DataflowEndpointConfig } from "./dataflowendpointconfig";
import { S3RecordingConfig } from "./s3recordingconfig";
import { TrackingConfig } from "./trackingconfig";
import { UplinkEchoConfig } from "./uplinkechoconfig";



// ConfigTypeData
/** 
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
**/
export class ConfigTypeData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=antennaDownlinkConfig" })
  antennaDownlinkConfig?: AntennaDownlinkConfig;

  @SpeakeasyMetadata({ data: "json, name=antennaDownlinkDemodDecodeConfig" })
  antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;

  @SpeakeasyMetadata({ data: "json, name=antennaUplinkConfig" })
  antennaUplinkConfig?: AntennaUplinkConfig;

  @SpeakeasyMetadata({ data: "json, name=dataflowEndpointConfig" })
  dataflowEndpointConfig?: DataflowEndpointConfig;

  @SpeakeasyMetadata({ data: "json, name=s3RecordingConfig" })
  s3RecordingConfig?: S3RecordingConfig;

  @SpeakeasyMetadata({ data: "json, name=trackingConfig" })
  trackingConfig?: TrackingConfig;

  @SpeakeasyMetadata({ data: "json, name=uplinkEchoConfig" })
  uplinkEchoConfig?: UplinkEchoConfig;
}
