import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainStatusEnum } from "./domainstatusenum";
import { SubDomain } from "./subdomain";



// DomainAssociation
/** 
 *  Describes a domain association that associates a custom domain with an Amplify app. 
**/
export class DomainAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoSubDomainCreationPatterns" })
  autoSubDomainCreationPatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=autoSubDomainIAMRole" })
  autoSubDomainIamRole?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateVerificationDNSRecord" })
  certificateVerificationDnsRecord?: string;

  @SpeakeasyMetadata({ data: "json, name=domainAssociationArn" })
  domainAssociationArn: string;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=domainStatus" })
  domainStatus: DomainStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=enableAutoSubDomain" })
  enableAutoSubDomain: boolean;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason: string;

  @SpeakeasyMetadata({ data: "json, name=subDomains", elemType: SubDomain })
  subDomains: SubDomain[];
}
