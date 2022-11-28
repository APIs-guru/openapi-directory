import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoRegistrationStatusEnum } from "./autoregistrationstatusenum";
import { CaCertificateStatusEnum } from "./cacertificatestatusenum";
import { CertificateValidity } from "./certificatevalidity";



// CaCertificateDescription
/** 
 * Describes a CA certificate.
**/
export class CaCertificateDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRegistrationStatus" })
  autoRegistrationStatus?: AutoRegistrationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=certificatePem" })
  certificatePem?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=customerVersion" })
  customerVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=generationId" })
  generationId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ownedBy" })
  ownedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CaCertificateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=validity" })
  validity?: CertificateValidity;
}
