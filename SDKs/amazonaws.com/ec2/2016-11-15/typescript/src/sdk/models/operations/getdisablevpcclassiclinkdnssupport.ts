import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDisableVpcClassicLinkDnsSupportActionEnum {
    DisableVpcClassicLinkDnsSupport = "DisableVpcClassicLinkDnsSupport"
}

export enum GetDisableVpcClassicLinkDnsSupportVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisableVpcClassicLinkDnsSupportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisableVpcClassicLinkDnsSupportActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisableVpcClassicLinkDnsSupportVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId?: string;
}


export class GetDisableVpcClassicLinkDnsSupportHeaders extends SpeakeasyBase {
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


export class GetDisableVpcClassicLinkDnsSupportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDisableVpcClassicLinkDnsSupportQueryParams;

  @SpeakeasyMetadata()
  headers: GetDisableVpcClassicLinkDnsSupportHeaders;
}


export class GetDisableVpcClassicLinkDnsSupportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
