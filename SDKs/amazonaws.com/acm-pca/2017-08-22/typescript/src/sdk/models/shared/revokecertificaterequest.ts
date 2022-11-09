import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RevocationReasonEnum } from "./revocationreasonenum";


export class RevokeCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @Metadata({ data: "json, name=CertificateSerial" })
  certificateSerial: string;

  @Metadata({ data: "json, name=RevocationReason" })
  revocationReason: RevocationReasonEnum;
}
