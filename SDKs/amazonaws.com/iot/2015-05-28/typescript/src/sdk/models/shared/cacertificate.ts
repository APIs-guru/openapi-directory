import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaCertificateStatusEnum } from "./cacertificatestatusenum";



// CaCertificate
/** 
 * A CA certificate.
**/
export class CaCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CaCertificateStatusEnum;
}
