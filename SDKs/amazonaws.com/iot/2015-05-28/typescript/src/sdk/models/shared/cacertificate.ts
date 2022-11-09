import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CaCertificateStatusEnum } from "./cacertificatestatusenum";


// CaCertificate
/** 
 * A CA certificate.
**/
export class CaCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=status" })
  status?: CaCertificateStatusEnum;
}
