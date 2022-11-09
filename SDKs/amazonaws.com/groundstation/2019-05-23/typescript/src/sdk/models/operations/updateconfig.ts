import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateConfigConfigTypeEnum {
    AntennaDownlink = "antenna-downlink"
,    AntennaDownlinkDemodDecode = "antenna-downlink-demod-decode"
,    AntennaUplink = "antenna-uplink"
,    DataflowEndpoint = "dataflow-endpoint"
,    Tracking = "tracking"
,    UplinkEcho = "uplink-echo"
,    S3Recording = "s3-recording"
}


export class UpdateConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=configType" })
  configType: UpdateConfigConfigTypeEnum;
}


export class UpdateConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateConfigRequestBodyConfigData
/** 
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
**/
export class UpdateConfigRequestBodyConfigData extends SpeakeasyBase {
  @Metadata({ data: "json, name=antennaDownlinkConfig" })
  antennaDownlinkConfig?: shared.AntennaDownlinkConfig;

  @Metadata({ data: "json, name=antennaDownlinkDemodDecodeConfig" })
  antennaDownlinkDemodDecodeConfig?: shared.AntennaDownlinkDemodDecodeConfig;

  @Metadata({ data: "json, name=antennaUplinkConfig" })
  antennaUplinkConfig?: shared.AntennaUplinkConfig;

  @Metadata({ data: "json, name=dataflowEndpointConfig" })
  dataflowEndpointConfig?: shared.DataflowEndpointConfig;

  @Metadata({ data: "json, name=s3RecordingConfig" })
  s3RecordingConfig?: shared.S3RecordingConfig;

  @Metadata({ data: "json, name=trackingConfig" })
  trackingConfig?: shared.TrackingConfig;

  @Metadata({ data: "json, name=uplinkEchoConfig" })
  uplinkEchoConfig?: shared.UplinkEchoConfig;
}


export class UpdateConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=configData" })
  configData: UpdateConfigRequestBodyConfigData;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class UpdateConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateConfigPathParams;

  @Metadata()
  headers: UpdateConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateConfigRequestBody;
}


export class UpdateConfigResponse extends SpeakeasyBase {
  @Metadata()
  configIdResponse?: shared.ConfigIdResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  dependencyException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
