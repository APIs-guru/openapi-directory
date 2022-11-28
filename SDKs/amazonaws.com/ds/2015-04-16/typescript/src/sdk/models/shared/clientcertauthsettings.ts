import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClientCertAuthSettings
/** 
 * Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations. 
**/
export class ClientCertAuthSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OCSPUrl" })
  ocspUrl?: string;
}
