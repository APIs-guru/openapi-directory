import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientCertAuthSettings } from "./clientcertauthsettings";
import { CertificateTypeEnum } from "./certificatetypeenum";



export class RegisterCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateData" })
  certificateData: string;

  @SpeakeasyMetadata({ data: "json, name=ClientCertAuthSettings" })
  clientCertAuthSettings?: ClientCertAuthSettings;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: CertificateTypeEnum;
}
