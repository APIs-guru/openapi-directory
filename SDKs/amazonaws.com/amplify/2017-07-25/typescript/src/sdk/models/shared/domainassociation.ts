import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainStatusEnum } from "./domainstatusenum";
import { SubDomain } from "./subdomain";


// DomainAssociation
/** 
 *  Describes a domain association that associates a custom domain with an Amplify app. 
**/
export class DomainAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoSubDomainCreationPatterns" })
  autoSubDomainCreationPatterns?: string[];

  @Metadata({ data: "json, name=autoSubDomainIAMRole" })
  autoSubDomainIamRole?: string;

  @Metadata({ data: "json, name=certificateVerificationDNSRecord" })
  certificateVerificationDnsRecord?: string;

  @Metadata({ data: "json, name=domainAssociationArn" })
  domainAssociationArn: string;

  @Metadata({ data: "json, name=domainName" })
  domainName: string;

  @Metadata({ data: "json, name=domainStatus" })
  domainStatus: DomainStatusEnum;

  @Metadata({ data: "json, name=enableAutoSubDomain" })
  enableAutoSubDomain: boolean;

  @Metadata({ data: "json, name=statusReason" })
  statusReason: string;

  @Metadata({ data: "json, name=subDomains", elemType: shared.SubDomain })
  subDomains: SubDomain[];
}
