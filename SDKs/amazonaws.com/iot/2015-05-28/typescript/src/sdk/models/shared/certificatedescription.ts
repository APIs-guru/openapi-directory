import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateModeEnum } from "./certificatemodeenum";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { TransferData } from "./transferdata";
import { CertificateValidity } from "./certificatevalidity";


// CertificateDescription
/** 
 * Describes a certificate.
**/
export class CertificateDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=caCertificateId" })
  caCertificateId?: string;

  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=certificateMode" })
  certificateMode?: CertificateModeEnum;

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

  @Metadata({ data: "json, name=previousOwnedBy" })
  previousOwnedBy?: string;

  @Metadata({ data: "json, name=status" })
  status?: CertificateStatusEnum;

  @Metadata({ data: "json, name=transferData" })
  transferData?: TransferData;

  @Metadata({ data: "json, name=validity" })
  validity?: CertificateValidity;
}
