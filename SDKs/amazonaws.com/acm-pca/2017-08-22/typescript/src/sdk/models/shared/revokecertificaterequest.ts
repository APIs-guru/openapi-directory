import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevocationReasonEnum } from "./revocationreasonenum";



export class RevokeCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateSerial" })
  certificateSerial: string;

  @SpeakeasyMetadata({ data: "json, name=RevocationReason" })
  revocationReason: RevocationReasonEnum;
}
