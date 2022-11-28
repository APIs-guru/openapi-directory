import { SpeakeasyBase } from "../../../internal/utils";
import { DirectoryServiceAuthentication } from "./directoryserviceauthentication";
import { FederatedAuthentication } from "./federatedauthentication";
import { CertificateAuthentication } from "./certificateauthentication";
import { ClientVpnAuthenticationTypeEnum } from "./clientvpnauthenticationtypeenum";
/**
 * Describes the authentication methods used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html">Authentication</a> in the <i>AWS Client VPN Administrator Guide</i>.
**/
export declare class ClientVpnAuthentication extends SpeakeasyBase {
    activeDirectory?: DirectoryServiceAuthentication;
    federatedAuthentication?: FederatedAuthentication;
    mutualAuthentication?: CertificateAuthentication;
    type?: ClientVpnAuthenticationTypeEnum;
}
