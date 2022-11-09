import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDomainNameHeaders extends SpeakeasyBase {
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


// CreateDomainNameRequestBodyEndpointConfiguration
/** 
 * The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
**/
export class CreateDomainNameRequestBodyEndpointConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=types" })
  types?: shared.EndpointTypeEnum[];

  @Metadata({ data: "json, name=vpcEndpointIds" })
  vpcEndpointIds?: string[];
}


// CreateDomainNameRequestBodyMutualTlsAuthentication
/** 
 * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
**/
export class CreateDomainNameRequestBodyMutualTlsAuthentication extends SpeakeasyBase {
  @Metadata({ data: "json, name=truststoreUri" })
  truststoreUri?: string;

  @Metadata({ data: "json, name=truststoreVersion" })
  truststoreVersion?: string;
}

export enum CreateDomainNameRequestBodySecurityPolicyEnum {
    Tls10 = "TLS_1_0"
,    Tls12 = "TLS_1_2"
}


export class CreateDomainNameRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificateBody" })
  certificateBody?: string;

  @Metadata({ data: "json, name=certificateChain" })
  certificateChain?: string;

  @Metadata({ data: "json, name=certificateName" })
  certificateName?: string;

  @Metadata({ data: "json, name=certificatePrivateKey" })
  certificatePrivateKey?: string;

  @Metadata({ data: "json, name=domainName" })
  domainName: string;

  @Metadata({ data: "json, name=endpointConfiguration" })
  endpointConfiguration?: CreateDomainNameRequestBodyEndpointConfiguration;

  @Metadata({ data: "json, name=mutualTlsAuthentication" })
  mutualTlsAuthentication?: CreateDomainNameRequestBodyMutualTlsAuthentication;

  @Metadata({ data: "json, name=ownershipVerificationCertificateArn" })
  ownershipVerificationCertificateArn?: string;

  @Metadata({ data: "json, name=regionalCertificateArn" })
  regionalCertificateArn?: string;

  @Metadata({ data: "json, name=regionalCertificateName" })
  regionalCertificateName?: string;

  @Metadata({ data: "json, name=securityPolicy" })
  securityPolicy?: CreateDomainNameRequestBodySecurityPolicyEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateDomainNameRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDomainNameHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDomainNameRequestBody;
}


export class CreateDomainNameResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  domainName?: shared.DomainName;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
