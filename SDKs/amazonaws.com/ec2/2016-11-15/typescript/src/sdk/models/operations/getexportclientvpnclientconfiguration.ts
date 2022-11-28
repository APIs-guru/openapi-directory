import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetExportClientVpnClientConfigurationActionEnum {
    ExportClientVpnClientConfiguration = "ExportClientVpnClientConfiguration"
}

export enum GetExportClientVpnClientConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetExportClientVpnClientConfigurationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetExportClientVpnClientConfigurationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" })
  clientVpnEndpointId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetExportClientVpnClientConfigurationVersionEnum;
}


export class GetExportClientVpnClientConfigurationHeaders extends SpeakeasyBase {
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


export class GetExportClientVpnClientConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetExportClientVpnClientConfigurationQueryParams;

  @SpeakeasyMetadata()
  headers: GetExportClientVpnClientConfigurationHeaders;
}


export class GetExportClientVpnClientConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
