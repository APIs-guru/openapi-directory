import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateValidationRecord } from "./certificatevalidationrecord";
import { CustomDomainAssociationStatusEnum } from "./customdomainassociationstatusenum";



// CustomDomain
/** 
 * Describes a custom domain that's associated with an AWS App Runner service.
**/
export class CustomDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateValidationRecords", elemType: CertificateValidationRecord })
  certificateValidationRecords?: CertificateValidationRecord[];

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=EnableWWWSubdomain" })
  enableWwwSubdomain: boolean;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: CustomDomainAssociationStatusEnum;
}
