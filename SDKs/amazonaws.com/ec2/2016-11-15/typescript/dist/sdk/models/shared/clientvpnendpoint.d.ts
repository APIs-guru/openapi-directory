import { SpeakeasyBase } from "../../../internal/utils";
import { AssociatedTargetNetwork } from "./associatedtargetnetwork";
import { ClientVpnAuthentication } from "./clientvpnauthentication";
import { ClientConnectResponseOptions } from "./clientconnectresponseoptions";
import { ConnectionLogResponseOptions } from "./connectionlogresponseoptions";
import { ClientVpnEndpointStatus } from "./clientvpnendpointstatus";
import { Tag } from "./tag";
import { TransportProtocolEnum } from "./transportprotocolenum";
import { VpnProtocolEnum } from "./vpnprotocolenum";
/**
 * Describes a Client VPN endpoint.
**/
export declare class ClientVpnEndpoint extends SpeakeasyBase {
    associatedTargetNetworks?: AssociatedTargetNetwork[];
    authenticationOptions?: ClientVpnAuthentication[];
    clientCidrBlock?: string;
    clientConnectOptions?: ClientConnectResponseOptions;
    clientVpnEndpointId?: string;
    connectionLogOptions?: ConnectionLogResponseOptions;
    creationTime?: string;
    deletionTime?: string;
    description?: string;
    dnsName?: string;
    dnsServers?: string[];
    securityGroupIds?: string[];
    selfServicePortalUrl?: string;
    serverCertificateArn?: string;
    splitTunnel?: boolean;
    status?: ClientVpnEndpointStatus;
    tags?: Tag[];
    transportProtocol?: TransportProtocolEnum;
    vpcId?: string;
    vpnPort?: number;
    vpnProtocol?: VpnProtocolEnum;
}
