import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateModeEnum } from "./certificatemodeenum";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { TransferData } from "./transferdata";
import { CertificateValidity } from "./certificatevalidity";



// CertificateDescription
/** 
 * Describes a certificate.
**/
export class CertificateDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caCertificateId" })
  caCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateMode" })
  certificateMode?: CertificateModeEnum;

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

  @SpeakeasyMetadata({ data: "json, name=previousOwnedBy" })
  previousOwnedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CertificateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transferData" })
  transferData?: TransferData;

  @SpeakeasyMetadata({ data: "json, name=validity" })
  validity?: CertificateValidity;
}
