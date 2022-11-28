import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateStateEnum } from "./certificatestateenum";
import { CertificateTypeEnum } from "./certificatetypeenum";



// CertificateInfo
/** 
 * Contains general information about a certificate.
**/
export class CertificateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateId" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=CommonName" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpiryDateTime" })
  expiryDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: CertificateStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: CertificateTypeEnum;
}
