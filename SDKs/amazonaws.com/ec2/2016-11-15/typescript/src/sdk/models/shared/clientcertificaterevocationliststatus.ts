import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientCertificateRevocationListStatusCodeEnum } from "./clientcertificaterevocationliststatuscodeenum";



// ClientCertificateRevocationListStatus
/** 
 * Describes the state of a client certificate revocation list.
**/
export class ClientCertificateRevocationListStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: ClientCertificateRevocationListStatusCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}
