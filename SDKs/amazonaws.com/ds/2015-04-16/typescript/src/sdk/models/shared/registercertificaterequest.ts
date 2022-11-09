import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientCertAuthSettings } from "./clientcertauthsettings";
import { CertificateTypeEnum } from "./certificatetypeenum";


export class RegisterCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateData" })
  certificateData: string;

  @Metadata({ data: "json, name=ClientCertAuthSettings" })
  clientCertAuthSettings?: ClientCertAuthSettings;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=Type" })
  type?: CertificateTypeEnum;
}
