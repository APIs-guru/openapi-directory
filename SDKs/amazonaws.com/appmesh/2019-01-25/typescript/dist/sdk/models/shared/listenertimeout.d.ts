import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcTimeout } from "./grpctimeout";
import { HttpTimeout } from "./httptimeout";
import { TcpTimeout } from "./tcptimeout";
/**
 * An object that represents timeouts for different protocols.
**/
export declare class ListenerTimeout extends SpeakeasyBase {
    grpc?: GrpcTimeout;
    http?: HttpTimeout;
    http2?: HttpTimeout;
    tcp?: TcpTimeout;
}
