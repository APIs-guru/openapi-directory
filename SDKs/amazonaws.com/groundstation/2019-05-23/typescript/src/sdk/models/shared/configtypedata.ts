import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=antennaDownlinkConfig" })
  antennaDownlinkConfig?: AntennaDownlinkConfig;

  @Metadata({ data: "json, name=antennaDownlinkDemodDecodeConfig" })
  antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;

  @Metadata({ data: "json, name=antennaUplinkConfig" })
  antennaUplinkConfig?: AntennaUplinkConfig;

  @Metadata({ data: "json, name=dataflowEndpointConfig" })
  dataflowEndpointConfig?: DataflowEndpointConfig;

  @Metadata({ data: "json, name=s3RecordingConfig" })
  s3RecordingConfig?: S3RecordingConfig;

  @Metadata({ data: "json, name=trackingConfig" })
  trackingConfig?: TrackingConfig;

  @Metadata({ data: "json, name=uplinkEchoConfig" })
  uplinkEchoConfig?: UplinkEchoConfig;
}
