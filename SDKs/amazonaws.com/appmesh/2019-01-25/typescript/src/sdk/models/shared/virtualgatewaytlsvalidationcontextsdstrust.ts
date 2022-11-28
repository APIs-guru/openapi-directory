import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualGatewayTlsValidationContextSdsTrust
/** 
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.
**/
export class VirtualGatewayTlsValidationContextSdsTrust extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secretName" })
  secretName: string;
}
