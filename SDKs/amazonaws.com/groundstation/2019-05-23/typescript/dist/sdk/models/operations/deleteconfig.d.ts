import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteConfigConfigTypeEnum {
    AntennaDownlink = "antenna-downlink",
    AntennaDownlinkDemodDecode = "antenna-downlink-demod-decode",
    AntennaUplink = "antenna-uplink",
    DataflowEndpoint = "dataflow-endpoint",
    Tracking = "tracking",
    UplinkEcho = "uplink-echo",
    S3Recording = "s3-recording"
}
export declare class DeleteConfigPathParams extends SpeakeasyBase {
    configId: string;
    configType: DeleteConfigConfigTypeEnum;
}
export declare class DeleteConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteConfigRequest extends SpeakeasyBase {
    pathParams: DeleteConfigPathParams;
    headers: DeleteConfigHeaders;
}
export declare class DeleteConfigResponse extends SpeakeasyBase {
    configIdResponse?: shared.ConfigIdResponse;
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
