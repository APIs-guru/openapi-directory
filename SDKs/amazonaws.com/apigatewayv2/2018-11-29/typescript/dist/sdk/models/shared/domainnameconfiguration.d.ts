import { SpeakeasyBase } from "../../../internal/utils";
import { DomainNameStatusEnum } from "./domainnamestatusenum";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { SecurityPolicyEnum } from "./securitypolicyenum";
/**
 * The domain name configuration.
**/
export declare class DomainNameConfiguration extends SpeakeasyBase {
    apiGatewayDomainName?: string;
    certificateArn?: string;
    certificateName?: string;
    certificateUploadDate?: Date;
    domainNameStatus?: DomainNameStatusEnum;
    domainNameStatusMessage?: string;
    endpointType?: EndpointTypeEnum;
    hostedZoneId?: string;
    ownershipVerificationCertificateArn?: string;
    securityPolicy?: SecurityPolicyEnum;
}
