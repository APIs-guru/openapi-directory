import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainNameStatusEnum } from "./domainnamestatusenum";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { SecurityPolicyEnum } from "./securitypolicyenum";



// DomainNameConfiguration
/** 
 * The domain name configuration.
**/
export class DomainNameConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiGatewayDomainName" })
  apiGatewayDomainName?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateName" })
  certificateName?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateUploadDate" })
  certificateUploadDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DomainNameStatus" })
  domainNameStatus?: DomainNameStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=DomainNameStatusMessage" })
  domainNameStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointType" })
  endpointType?: EndpointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=HostedZoneId" })
  hostedZoneId?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnershipVerificationCertificateArn" })
  ownershipVerificationCertificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityPolicy" })
  securityPolicy?: SecurityPolicyEnum;
}
