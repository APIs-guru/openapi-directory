import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualGatewayListenerTlsAcmCertificate
/** 
 * An object that represents an Certificate Manager certificate.
**/
export class VirtualGatewayListenerTlsAcmCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn: string;
}
