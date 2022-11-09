import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateAuthorityConfiguration } from "./certificateauthorityconfiguration";
import { CertificateAuthorityTypeEnum } from "./certificateauthoritytypeenum";
import { KeyStorageSecurityStandardEnum } from "./keystoragesecuritystandardenum";
import { RevocationConfiguration } from "./revocationconfiguration";
import { Tag } from "./tag";


export class CreateCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityConfiguration" })
  certificateAuthorityConfiguration: CertificateAuthorityConfiguration;

  @Metadata({ data: "json, name=CertificateAuthorityType" })
  certificateAuthorityType: CertificateAuthorityTypeEnum;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @Metadata({ data: "json, name=KeyStorageSecurityStandard" })
  keyStorageSecurityStandard?: KeyStorageSecurityStandardEnum;

  @Metadata({ data: "json, name=RevocationConfiguration" })
  revocationConfiguration?: RevocationConfiguration;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
