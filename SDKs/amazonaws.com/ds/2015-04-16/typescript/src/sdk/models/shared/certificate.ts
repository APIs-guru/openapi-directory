import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientCertAuthSettings } from "./clientcertauthsettings";
import { CertificateStateEnum } from "./certificatestateenum";
import { CertificateTypeEnum } from "./certificatetypeenum";



// Certificate
/** 
 * Information about the certificate.
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateId" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientCertAuthSettings" })
  clientCertAuthSettings?: ClientCertAuthSettings;

  @SpeakeasyMetadata({ data: "json, name=CommonName" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpiryDateTime" })
  expiryDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RegisteredDateTime" })
  registeredDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: CertificateStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateReason" })
  stateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: CertificateTypeEnum;
}
