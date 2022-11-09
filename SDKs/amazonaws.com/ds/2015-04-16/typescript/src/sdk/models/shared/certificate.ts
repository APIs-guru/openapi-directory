import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientCertAuthSettings } from "./clientcertauthsettings";
import { CertificateStateEnum } from "./certificatestateenum";
import { CertificateTypeEnum } from "./certificatetypeenum";


// Certificate
/** 
 * Information about the certificate.
**/
export class Certificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=ClientCertAuthSettings" })
  clientCertAuthSettings?: ClientCertAuthSettings;

  @Metadata({ data: "json, name=CommonName" })
  commonName?: string;

  @Metadata({ data: "json, name=ExpiryDateTime" })
  expiryDateTime?: Date;

  @Metadata({ data: "json, name=RegisteredDateTime" })
  registeredDateTime?: Date;

  @Metadata({ data: "json, name=State" })
  state?: CertificateStateEnum;

  @Metadata({ data: "json, name=StateReason" })
  stateReason?: string;

  @Metadata({ data: "json, name=Type" })
  type?: CertificateTypeEnum;
}
