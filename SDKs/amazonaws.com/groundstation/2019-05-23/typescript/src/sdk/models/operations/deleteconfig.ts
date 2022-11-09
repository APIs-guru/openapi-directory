import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteConfigConfigTypeEnum {
    AntennaDownlink = "antenna-downlink"
,    AntennaDownlinkDemodDecode = "antenna-downlink-demod-decode"
,    AntennaUplink = "antenna-uplink"
,    DataflowEndpoint = "dataflow-endpoint"
,    Tracking = "tracking"
,    UplinkEcho = "uplink-echo"
,    S3Recording = "s3-recording"
}


export class DeleteConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=configType" })
  configType: DeleteConfigConfigTypeEnum;
}


export class DeleteConfigHeaders extends SpeakeasyBase {
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


export class DeleteConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteConfigPathParams;

  @Metadata()
  headers: DeleteConfigHeaders;
}


export class DeleteConfigResponse extends SpeakeasyBase {
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
