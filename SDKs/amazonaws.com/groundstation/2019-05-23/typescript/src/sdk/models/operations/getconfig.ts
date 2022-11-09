import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetConfigConfigTypeEnum {
    AntennaDownlink = "antenna-downlink"
,    AntennaDownlinkDemodDecode = "antenna-downlink-demod-decode"
,    AntennaUplink = "antenna-uplink"
,    DataflowEndpoint = "dataflow-endpoint"
,    Tracking = "tracking"
,    UplinkEcho = "uplink-echo"
,    S3Recording = "s3-recording"
}


export class GetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=configType" })
  configType: GetConfigConfigTypeEnum;
}


export class GetConfigHeaders extends SpeakeasyBase {
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


export class GetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConfigPathParams;

  @Metadata()
  headers: GetConfigHeaders;
}


export class GetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependencyException?: any;

  @Metadata()
  getConfigResponse?: shared.GetConfigResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
