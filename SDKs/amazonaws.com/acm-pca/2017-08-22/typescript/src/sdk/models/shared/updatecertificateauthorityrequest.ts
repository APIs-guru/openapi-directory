import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RevocationConfiguration } from "./revocationconfiguration";
import { CertificateAuthorityStatusEnum } from "./certificateauthoritystatusenum";


export class UpdateCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @Metadata({ data: "json, name=RevocationConfiguration" })
  revocationConfiguration?: RevocationConfiguration;

  @Metadata({ data: "json, name=Status" })
  status?: CertificateAuthorityStatusEnum;
}
