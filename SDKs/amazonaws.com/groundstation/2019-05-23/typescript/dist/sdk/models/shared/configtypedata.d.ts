import { SpeakeasyBase } from "../../../internal/utils";
import { AntennaDownlinkConfig } from "./antennadownlinkconfig";
import { AntennaDownlinkDemodDecodeConfig } from "./antennadownlinkdemoddecodeconfig";
import { AntennaUplinkConfig } from "./antennauplinkconfig";
import { DataflowEndpointConfig } from "./dataflowendpointconfig";
import { S3RecordingConfig } from "./s3recordingconfig";
import { TrackingConfig } from "./trackingconfig";
import { UplinkEchoConfig } from "./uplinkechoconfig";
/**
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
**/
export declare class ConfigTypeData extends SpeakeasyBase {
    antennaDownlinkConfig?: AntennaDownlinkConfig;
    antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;
    antennaUplinkConfig?: AntennaUplinkConfig;
    dataflowEndpointConfig?: DataflowEndpointConfig;
    s3RecordingConfig?: S3RecordingConfig;
    trackingConfig?: TrackingConfig;
    uplinkEchoConfig?: UplinkEchoConfig;
}
