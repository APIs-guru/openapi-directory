import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSetLoadBalancerListenerSslCertificateActionEnum {
    SetLoadBalancerListenerSslCertificate = "SetLoadBalancerListenerSSLCertificate"
}

export enum GetSetLoadBalancerListenerSslCertificateVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetSetLoadBalancerListenerSslCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetLoadBalancerListenerSslCertificateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerPort" })
  loadBalancerPort: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SSLCertificateId" })
  sslCertificateId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetLoadBalancerListenerSslCertificateVersionEnum;
}


export class GetSetLoadBalancerListenerSslCertificateHeaders extends SpeakeasyBase {
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


export class GetSetLoadBalancerListenerSslCertificateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetLoadBalancerListenerSslCertificateQueryParams;

  @Metadata()
  headers: GetSetLoadBalancerListenerSslCertificateHeaders;
}


export class GetSetLoadBalancerListenerSslCertificateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
