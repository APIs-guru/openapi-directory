import { SpeakeasyBase } from "../../../internal/utils";
import { ClientCertificateRevocationListStatus } from "./clientcertificaterevocationliststatus";
export declare class ExportClientVpnClientCertificateRevocationListResult extends SpeakeasyBase {
    certificateRevocationList?: string;
    status?: ClientCertificateRevocationListStatus;
}
