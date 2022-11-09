import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostCreateClientVpnEndpointActionEnum {
    CreateClientVpnEndpoint = "CreateClientVpnEndpoint"
}

export enum PostCreateClientVpnEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostCreateClientVpnEndpointQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCreateClientVpnEndpointActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCreateClientVpnEndpointVersionEnum;
}


export class PostCreateClientVpnEndpointHeaders extends SpeakeasyBase {
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


export class PostCreateClientVpnEndpointRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCreateClientVpnEndpointQueryParams;

  @Metadata()
  headers: PostCreateClientVpnEndpointHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCreateClientVpnEndpointResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
