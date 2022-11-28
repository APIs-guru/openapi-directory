import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListenerTlsAcmCertificate
/** 
 * An object that represents an AWS Certicate Manager (ACM) certificate.
**/
export class ListenerTlsAcmCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn: string;
}
