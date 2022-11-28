import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
import { Action } from "./action";
import { ProtocolEnumEnum } from "./protocolenumenum";
/**
 * Information about a listener.
**/
export declare class Listener extends SpeakeasyBase {
    alpnPolicy?: string[];
    certificates?: Certificate[];
    defaultActions?: Action[];
    listenerArn?: string;
    loadBalancerArn?: string;
    port?: number;
    protocol?: ProtocolEnumEnum;
    sslPolicy?: string;
}
