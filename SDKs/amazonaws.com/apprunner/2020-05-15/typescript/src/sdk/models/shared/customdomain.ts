import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateValidationRecord } from "./certificatevalidationrecord";
import { CustomDomainAssociationStatusEnum } from "./customdomainassociationstatusenum";


// CustomDomain
/** 
 * Describes a custom domain that's associated with an AWS App Runner service.
**/
export class CustomDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateValidationRecords", elemType: shared.CertificateValidationRecord })
  certificateValidationRecords?: CertificateValidationRecord[];

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=EnableWWWSubdomain" })
  enableWwwSubdomain: boolean;

  @Metadata({ data: "json, name=Status" })
  status: CustomDomainAssociationStatusEnum;
}
