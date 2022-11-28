import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientCertificateRevocationListStatus } from "./clientcertificaterevocationliststatus";



export class ExportClientVpnClientCertificateRevocationListResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateRevocationList?: string;

  @SpeakeasyMetadata()
  status?: ClientCertificateRevocationListStatus;
}
