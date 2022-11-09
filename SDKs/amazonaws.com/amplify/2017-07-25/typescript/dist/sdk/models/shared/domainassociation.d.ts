import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainStatusEnum } from "./domainstatusenum";
import { SubDomain } from "./subdomain";
/**
 *  Describes a domain association that associates a custom domain with an Amplify app.
**/
export declare class DomainAssociation extends SpeakeasyBase {
    autoSubDomainCreationPatterns?: string[];
    autoSubDomainIamRole?: string;
    certificateVerificationDnsRecord?: string;
    domainAssociationArn: string;
    domainName: string;
    domainStatus: DomainStatusEnum;
    enableAutoSubDomain: boolean;
    statusReason: string;
    subDomains: SubDomain[];
}
