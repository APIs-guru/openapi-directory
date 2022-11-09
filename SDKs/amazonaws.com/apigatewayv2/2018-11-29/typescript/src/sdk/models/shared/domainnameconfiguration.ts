import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainNameStatusEnum } from "./domainnamestatusenum";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { SecurityPolicyEnum } from "./securitypolicyenum";


// DomainNameConfiguration
/** 
 * The domain name configuration.
**/
export class DomainNameConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiGatewayDomainName" })
  apiGatewayDomainName?: string;

  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=CertificateName" })
  certificateName?: string;

  @Metadata({ data: "json, name=CertificateUploadDate" })
  certificateUploadDate?: Date;

  @Metadata({ data: "json, name=DomainNameStatus" })
  domainNameStatus?: DomainNameStatusEnum;

  @Metadata({ data: "json, name=DomainNameStatusMessage" })
  domainNameStatusMessage?: string;

  @Metadata({ data: "json, name=EndpointType" })
  endpointType?: EndpointTypeEnum;

  @Metadata({ data: "json, name=HostedZoneId" })
  hostedZoneId?: string;

  @Metadata({ data: "json, name=OwnershipVerificationCertificateArn" })
  ownershipVerificationCertificateArn?: string;

  @Metadata({ data: "json, name=SecurityPolicy" })
  securityPolicy?: SecurityPolicyEnum;
}
