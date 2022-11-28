import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateConfigHeaders extends SpeakeasyBase {
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


// CreateConfigRequestBodyConfigData
/** 
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
**/
export class CreateConfigRequestBodyConfigData extends SpeakeasyBase {
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


export class CreateConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configData" })
  configData: CreateConfigRequestBodyConfigData;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateConfigRequestBody;
}


export class CreateConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configIdResponse?: shared.ConfigIdResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  resourceLimitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
