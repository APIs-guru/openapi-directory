import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDisableVpcClassicLinkDnsSupportActionEnum {
    DisableVpcClassicLinkDnsSupport = "DisableVpcClassicLinkDnsSupport"
}

export enum GetDisableVpcClassicLinkDnsSupportVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisableVpcClassicLinkDnsSupportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisableVpcClassicLinkDnsSupportActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisableVpcClassicLinkDnsSupportVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId?: string;
}


export class GetDisableVpcClassicLinkDnsSupportHeaders extends SpeakeasyBase {
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


export class GetDisableVpcClassicLinkDnsSupportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDisableVpcClassicLinkDnsSupportQueryParams;

  @Metadata()
  headers: GetDisableVpcClassicLinkDnsSupportHeaders;
}


export class GetDisableVpcClassicLinkDnsSupportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
