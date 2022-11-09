import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoRegistrationStatusEnum } from "./autoregistrationstatusenum";
import { CaCertificateStatusEnum } from "./cacertificatestatusenum";
import { CertificateValidity } from "./certificatevalidity";


// CaCertificateDescription
/** 
 * Describes a CA certificate.
**/
export class CaCertificateDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoRegistrationStatus" })
  autoRegistrationStatus?: AutoRegistrationStatusEnum;

  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=certificatePem" })
  certificatePem?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=customerVersion" })
  customerVersion?: number;

  @Metadata({ data: "json, name=generationId" })
  generationId?: string;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=ownedBy" })
  ownedBy?: string;

  @Metadata({ data: "json, name=status" })
  status?: CaCertificateStatusEnum;

  @Metadata({ data: "json, name=validity" })
  validity?: CertificateValidity;
}
