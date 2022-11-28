import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDomainNameHeaders extends SpeakeasyBase {
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


// CreateDomainNameRequestBodyEndpointConfiguration
/** 
 * The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
**/
export class CreateDomainNameRequestBodyEndpointConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: shared.EndpointTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=vpcEndpointIds" })
  vpcEndpointIds?: string[];
}


// CreateDomainNameRequestBodyMutualTlsAuthentication
/** 
 * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
**/
export class CreateDomainNameRequestBodyMutualTlsAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=truststoreUri" })
  truststoreUri?: string;

  @SpeakeasyMetadata({ data: "json, name=truststoreVersion" })
  truststoreVersion?: string;
}

export enum CreateDomainNameRequestBodySecurityPolicyEnum {
    Tls10 = "TLS_1_0",
    Tls12 = "TLS_1_2"
}


export class CreateDomainNameRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateBody" })
  certificateBody?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateChain" })
  certificateChain?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateName" })
  certificateName?: string;

  @SpeakeasyMetadata({ data: "json, name=certificatePrivateKey" })
  certificatePrivateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=endpointConfiguration" })
  endpointConfiguration?: CreateDomainNameRequestBodyEndpointConfiguration;

  @SpeakeasyMetadata({ data: "json, name=mutualTlsAuthentication" })
  mutualTlsAuthentication?: CreateDomainNameRequestBodyMutualTlsAuthentication;

  @SpeakeasyMetadata({ data: "json, name=ownershipVerificationCertificateArn" })
  ownershipVerificationCertificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=regionalCertificateArn" })
  regionalCertificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=regionalCertificateName" })
  regionalCertificateName?: string;

  @SpeakeasyMetadata({ data: "json, name=securityPolicy" })
  securityPolicy?: CreateDomainNameRequestBodySecurityPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateDomainNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDomainNameHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDomainNameRequestBody;
}


export class CreateDomainNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domainName?: shared.DomainName;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
