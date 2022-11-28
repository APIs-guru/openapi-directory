import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExportCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateChain" })
  certificateChain?: string;

  @SpeakeasyMetadata({ data: "json, name=PrivateKey" })
  privateKey?: string;
}
