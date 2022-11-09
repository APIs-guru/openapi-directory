import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetStartVpcEndpointServicePrivateDnsVerificationActionEnum {
    StartVpcEndpointServicePrivateDnsVerification = "StartVpcEndpointServicePrivateDnsVerification"
}

export enum GetStartVpcEndpointServicePrivateDnsVerificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetStartVpcEndpointServicePrivateDnsVerificationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStartVpcEndpointServicePrivateDnsVerificationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceId" })
  serviceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStartVpcEndpointServicePrivateDnsVerificationVersionEnum;
}


export class GetStartVpcEndpointServicePrivateDnsVerificationHeaders extends SpeakeasyBase {
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


export class GetStartVpcEndpointServicePrivateDnsVerificationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStartVpcEndpointServicePrivateDnsVerificationQueryParams;

  @Metadata()
  headers: GetStartVpcEndpointServicePrivateDnsVerificationHeaders;
}


export class GetStartVpcEndpointServicePrivateDnsVerificationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
