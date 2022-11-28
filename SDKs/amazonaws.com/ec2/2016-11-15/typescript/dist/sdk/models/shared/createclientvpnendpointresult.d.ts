import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnEndpointStatus } from "./clientvpnendpointstatus";
export declare class CreateClientVpnEndpointResult extends SpeakeasyBase {
    clientVpnEndpointId?: string;
    dnsName?: string;
    status?: ClientVpnEndpointStatus;
}
