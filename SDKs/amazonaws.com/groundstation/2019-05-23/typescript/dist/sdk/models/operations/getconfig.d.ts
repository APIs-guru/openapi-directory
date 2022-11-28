import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetConfigConfigTypeEnum {
    AntennaDownlink = "antenna-downlink",
    AntennaDownlinkDemodDecode = "antenna-downlink-demod-decode",
    AntennaUplink = "antenna-uplink",
    DataflowEndpoint = "dataflow-endpoint",
    Tracking = "tracking",
    UplinkEcho = "uplink-echo",
    S3Recording = "s3-recording"
}
export declare class GetConfigPathParams extends SpeakeasyBase {
    configId: string;
    configType: GetConfigConfigTypeEnum;
}
export declare class GetConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetConfigRequest extends SpeakeasyBase {
    pathParams: GetConfigPathParams;
    headers: GetConfigHeaders;
}
export declare class GetConfigResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    getConfigResponse?: shared.GetConfigResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
