import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateConfigHeaders extends SpeakeasyBase {
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
export declare class CreateConfigRequestBodyConfigData extends SpeakeasyBase {
    antennaDownlinkConfig?: shared.AntennaDownlinkConfig;
    antennaDownlinkDemodDecodeConfig?: shared.AntennaDownlinkDemodDecodeConfig;
    antennaUplinkConfig?: shared.AntennaUplinkConfig;
    dataflowEndpointConfig?: shared.DataflowEndpointConfig;
    s3RecordingConfig?: shared.S3RecordingConfig;
    trackingConfig?: shared.TrackingConfig;
    uplinkEchoConfig?: shared.UplinkEchoConfig;
}
export declare class CreateConfigRequestBody extends SpeakeasyBase {
    configData: CreateConfigRequestBodyConfigData;
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateConfigRequest extends SpeakeasyBase {
    headers: CreateConfigHeaders;
    request: CreateConfigRequestBody;
}
export declare class CreateConfigResponse extends SpeakeasyBase {
    configIdResponse?: shared.ConfigIdResponse;
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
