import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents the listener's Secret Discovery Service certificate. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.
**/
export declare class ListenerTlsSdsCertificate extends SpeakeasyBase {
    secretName: string;
}
