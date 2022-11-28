import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetConfigConfigTypeEnum {
    AntennaDownlink = "antenna-downlink",
    AntennaDownlinkDemodDecode = "antenna-downlink-demod-decode",
    AntennaUplink = "antenna-uplink",
    DataflowEndpoint = "dataflow-endpoint",
    Tracking = "tracking",
    UplinkEcho = "uplink-echo",
    S3Recording = "s3-recording"
}


export class GetConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configType" })
  configType: GetConfigConfigTypeEnum;
}


export class GetConfigHeaders extends SpeakeasyBase {
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


export class GetConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConfigPathParams;

  @SpeakeasyMetadata()
  headers: GetConfigHeaders;
}


export class GetConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyException?: any;

  @SpeakeasyMetadata()
  getConfigResponse?: shared.GetConfigResponse;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
