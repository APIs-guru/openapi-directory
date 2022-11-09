import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateStateEnum } from "./certificatestateenum";
import { CertificateTypeEnum } from "./certificatetypeenum";


// CertificateInfo
/** 
 * Contains general information about a certificate.
**/
export class CertificateInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=CommonName" })
  commonName?: string;

  @Metadata({ data: "json, name=ExpiryDateTime" })
  expiryDateTime?: Date;

  @Metadata({ data: "json, name=State" })
  state?: CertificateStateEnum;

  @Metadata({ data: "json, name=Type" })
  type?: CertificateTypeEnum;
}
