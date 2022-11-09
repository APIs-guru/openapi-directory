import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListenerTlsAcmCertificate
/** 
 * An object that represents an AWS Certicate Manager (ACM) certificate.
**/
export class ListenerTlsAcmCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn: string;
}
