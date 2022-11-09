import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyInstanceMetadataOptionsActionEnum {
    ModifyInstanceMetadataOptions = "ModifyInstanceMetadataOptions"
}

export enum GetModifyInstanceMetadataOptionsHttpEndpointEnum {
    Disabled = "disabled"
,    Enabled = "enabled"
}

export enum GetModifyInstanceMetadataOptionsHttpProtocolIpv6Enum {
    Disabled = "disabled"
,    Enabled = "enabled"
}

export enum GetModifyInstanceMetadataOptionsHttpTokensEnum {
    Optional = "optional"
,    Required = "required"
}

export enum GetModifyInstanceMetadataOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyInstanceMetadataOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyInstanceMetadataOptionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HttpEndpoint" })
  httpEndpoint?: GetModifyInstanceMetadataOptionsHttpEndpointEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HttpProtocolIpv6" })
  httpProtocolIpv6?: GetModifyInstanceMetadataOptionsHttpProtocolIpv6Enum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HttpPutResponseHopLimit" })
  httpPutResponseHopLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HttpTokens" })
  httpTokens?: GetModifyInstanceMetadataOptionsHttpTokensEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyInstanceMetadataOptionsVersionEnum;
}


export class GetModifyInstanceMetadataOptionsHeaders extends SpeakeasyBase {
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


export class GetModifyInstanceMetadataOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyInstanceMetadataOptionsQueryParams;

  @Metadata()
  headers: GetModifyInstanceMetadataOptionsHeaders;
}


export class GetModifyInstanceMetadataOptionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
