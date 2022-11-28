import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateModeEnum } from "./certificatemodeenum";
import { CertificateStatusEnum } from "./certificatestatusenum";



// Certificate
/** 
 * Information about a certificate.
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateMode" })
  certificateMode?: CertificateModeEnum;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CertificateStatusEnum;
}
