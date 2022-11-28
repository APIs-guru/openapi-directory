import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthorityConfiguration } from "./certificateauthorityconfiguration";
import { CertificateAuthorityTypeEnum } from "./certificateauthoritytypeenum";
import { KeyStorageSecurityStandardEnum } from "./keystoragesecuritystandardenum";
import { RevocationConfiguration } from "./revocationconfiguration";
import { Tag } from "./tag";



export class CreateCertificateAuthorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityConfiguration" })
  certificateAuthorityConfiguration: CertificateAuthorityConfiguration;

  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityType" })
  certificateAuthorityType: CertificateAuthorityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyStorageSecurityStandard" })
  keyStorageSecurityStandard?: KeyStorageSecurityStandardEnum;

  @SpeakeasyMetadata({ data: "json, name=RevocationConfiguration" })
  revocationConfiguration?: RevocationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
