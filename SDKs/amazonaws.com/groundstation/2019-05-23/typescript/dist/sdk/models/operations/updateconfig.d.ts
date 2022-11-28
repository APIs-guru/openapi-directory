import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateConfigConfigTypeEnum {
    AntennaDownlink = "antenna-downlink",
    AntennaDownlinkDemodDecode = "antenna-downlink-demod-decode",
    AntennaUplink = "antenna-uplink",
    DataflowEndpoint = "dataflow-endpoint",
    Tracking = "tracking",
    UplinkEcho = "uplink-echo",
    S3Recording = "s3-recording"
}
export declare class UpdateConfigPathParams extends SpeakeasyBase {
    configId: string;
    configType: UpdateConfigConfigTypeEnum;
}
export declare class UpdateConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
**/
export declare class UpdateConfigRequestBodyConfigData extends SpeakeasyBase {
    antennaDownlinkConfig?: shared.AntennaDownlinkConfig;
    antennaDownlinkDemodDecodeConfig?: shared.AntennaDownlinkDemodDecodeConfig;
    antennaUplinkConfig?: shared.AntennaUplinkConfig;
    dataflowEndpointConfig?: shared.DataflowEndpointConfig;
    s3RecordingConfig?: shared.S3RecordingConfig;
    trackingConfig?: shared.TrackingConfig;
    uplinkEchoConfig?: shared.UplinkEchoConfig;
}
export declare class UpdateConfigRequestBody extends SpeakeasyBase {
    configData: UpdateConfigRequestBodyConfigData;
    name: string;
}
export declare class UpdateConfigRequest extends SpeakeasyBase {
    pathParams: UpdateConfigPathParams;
    headers: UpdateConfigHeaders;
    request: UpdateConfigRequestBody;
}
export declare class UpdateConfigResponse extends SpeakeasyBase {
    configIdResponse?: shared.ConfigIdResponse;
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
