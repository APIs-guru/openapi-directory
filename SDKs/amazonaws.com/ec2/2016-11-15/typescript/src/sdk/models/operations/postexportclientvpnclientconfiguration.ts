import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostExportClientVpnClientConfigurationActionEnum {
    ExportClientVpnClientConfiguration = "ExportClientVpnClientConfiguration"
}

export enum PostExportClientVpnClientConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostExportClientVpnClientConfigurationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostExportClientVpnClientConfigurationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostExportClientVpnClientConfigurationVersionEnum;
}


export class PostExportClientVpnClientConfigurationHeaders extends SpeakeasyBase {
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


export class PostExportClientVpnClientConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostExportClientVpnClientConfigurationQueryParams;

  @Metadata()
  headers: PostExportClientVpnClientConfigurationHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostExportClientVpnClientConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
