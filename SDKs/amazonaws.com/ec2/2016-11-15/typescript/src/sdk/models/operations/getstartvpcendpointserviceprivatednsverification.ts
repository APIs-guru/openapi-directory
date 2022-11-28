import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetStartVpcEndpointServicePrivateDnsVerificationActionEnum {
    StartVpcEndpointServicePrivateDnsVerification = "StartVpcEndpointServicePrivateDnsVerification"
}

export enum GetStartVpcEndpointServicePrivateDnsVerificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetStartVpcEndpointServicePrivateDnsVerificationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStartVpcEndpointServicePrivateDnsVerificationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceId" })
  serviceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStartVpcEndpointServicePrivateDnsVerificationVersionEnum;
}


export class GetStartVpcEndpointServicePrivateDnsVerificationHeaders extends SpeakeasyBase {
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


export class GetStartVpcEndpointServicePrivateDnsVerificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStartVpcEndpointServicePrivateDnsVerificationQueryParams;

  @SpeakeasyMetadata()
  headers: GetStartVpcEndpointServicePrivateDnsVerificationHeaders;
}


export class GetStartVpcEndpointServicePrivateDnsVerificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
