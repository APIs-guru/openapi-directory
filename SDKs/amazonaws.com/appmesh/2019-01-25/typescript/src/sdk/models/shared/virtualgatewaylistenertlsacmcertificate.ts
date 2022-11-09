import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualGatewayListenerTlsAcmCertificate
/** 
 * An object that represents an Certificate Manager certificate.
**/
export class VirtualGatewayListenerTlsAcmCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn: string;
}
