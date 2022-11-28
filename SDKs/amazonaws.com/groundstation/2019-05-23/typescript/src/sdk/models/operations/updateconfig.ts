import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateConfigConfigTypeEnum {
    AntennaDownlink = "antenna-downlink",
    AntennaDownlinkDemodDecode = "antenna-downlink-demod-decode",
    AntennaUplink = "antenna-uplink",
    DataflowEndpoint = "dataflow-endpoint",
    Tracking = "tracking",
    UplinkEcho = "uplink-echo",
    S3Recording = "s3-recording"
}


export class UpdateConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configType" })
  configType: UpdateConfigConfigTypeEnum;
}


export class UpdateConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateConfigRequestBodyConfigData
/** 
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
**/
export class UpdateConfigRequestBodyConfigData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=antennaDownlinkConfig" })
  antennaDownlinkConfig?: shared.AntennaDownlinkConfig;

  @SpeakeasyMetadata({ data: "json, name=antennaDownlinkDemodDecodeConfig" })
  antennaDownlinkDemodDecodeConfig?: shared.AntennaDownlinkDemodDecodeConfig;

  @SpeakeasyMetadata({ data: "json, name=antennaUplinkConfig" })
  antennaUplinkConfig?: shared.AntennaUplinkConfig;

  @SpeakeasyMetadata({ data: "json, name=dataflowEndpointConfig" })
  dataflowEndpointConfig?: shared.DataflowEndpointConfig;

  @SpeakeasyMetadata({ data: "json, name=s3RecordingConfig" })
  s3RecordingConfig?: shared.S3RecordingConfig;

  @SpeakeasyMetadata({ data: "json, name=trackingConfig" })
  trackingConfig?: shared.TrackingConfig;

  @SpeakeasyMetadata({ data: "json, name=uplinkEchoConfig" })
  uplinkEchoConfig?: shared.UplinkEchoConfig;
}


export class UpdateConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configData" })
  configData: UpdateConfigRequestBodyConfigData;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class UpdateConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateConfigPathParams;

  @SpeakeasyMetadata()
  headers: UpdateConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateConfigRequestBody;
}


export class UpdateConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configIdResponse?: shared.ConfigIdResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
