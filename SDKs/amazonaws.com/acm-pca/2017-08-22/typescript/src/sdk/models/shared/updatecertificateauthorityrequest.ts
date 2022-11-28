import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevocationConfiguration } from "./revocationconfiguration";
import { CertificateAuthorityStatusEnum } from "./certificateauthoritystatusenum";



export class UpdateCertificateAuthorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @SpeakeasyMetadata({ data: "json, name=RevocationConfiguration" })
  revocationConfiguration?: RevocationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CertificateAuthorityStatusEnum;
}
