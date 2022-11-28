import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyInstanceMetadataOptionsActionEnum {
    ModifyInstanceMetadataOptions = "ModifyInstanceMetadataOptions"
}

export enum GetModifyInstanceMetadataOptionsHttpEndpointEnum {
    Disabled = "disabled",
    Enabled = "enabled"
}

export enum GetModifyInstanceMetadataOptionsHttpProtocolIpv6Enum {
    Disabled = "disabled",
    Enabled = "enabled"
}

export enum GetModifyInstanceMetadataOptionsHttpTokensEnum {
    Optional = "optional",
    Required = "required"
}

export enum GetModifyInstanceMetadataOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyInstanceMetadataOptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyInstanceMetadataOptionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HttpEndpoint" })
  httpEndpoint?: GetModifyInstanceMetadataOptionsHttpEndpointEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HttpProtocolIpv6" })
  httpProtocolIpv6?: GetModifyInstanceMetadataOptionsHttpProtocolIpv6Enum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HttpPutResponseHopLimit" })
  httpPutResponseHopLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HttpTokens" })
  httpTokens?: GetModifyInstanceMetadataOptionsHttpTokensEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyInstanceMetadataOptionsVersionEnum;
}


export class GetModifyInstanceMetadataOptionsHeaders extends SpeakeasyBase {
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


export class GetModifyInstanceMetadataOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyInstanceMetadataOptionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyInstanceMetadataOptionsHeaders;
}


export class GetModifyInstanceMetadataOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
