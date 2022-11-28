import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetLoadBalancerListenerSslCertificateActionEnum {
    SetLoadBalancerListenerSslCertificate = "SetLoadBalancerListenerSSLCertificate"
}

export enum GetSetLoadBalancerListenerSslCertificateVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetSetLoadBalancerListenerSslCertificateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetLoadBalancerListenerSslCertificateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerPort" })
  loadBalancerPort: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SSLCertificateId" })
  sslCertificateId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetLoadBalancerListenerSslCertificateVersionEnum;
}


export class GetSetLoadBalancerListenerSslCertificateHeaders extends SpeakeasyBase {
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


export class GetSetLoadBalancerListenerSslCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetLoadBalancerListenerSslCertificateQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetLoadBalancerListenerSslCertificateHeaders;
}


export class GetSetLoadBalancerListenerSslCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
