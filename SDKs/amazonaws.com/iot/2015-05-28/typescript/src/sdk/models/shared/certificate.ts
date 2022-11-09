import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateModeEnum } from "./certificatemodeenum";
import { CertificateStatusEnum } from "./certificatestatusenum";


// Certificate
/** 
 * Information about a certificate.
**/
export class Certificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=certificateMode" })
  certificateMode?: CertificateModeEnum;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=status" })
  status?: CertificateStatusEnum;
}
