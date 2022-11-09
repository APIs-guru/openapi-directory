import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrpcTimeout } from "./grpctimeout";
import { HttpTimeout } from "./httptimeout";
import { HttpTimeout } from "./httptimeout";
import { TcpTimeout } from "./tcptimeout";


// ListenerTimeout
/** 
 * An object that represents timeouts for different protocols.
**/
export class ListenerTimeout extends SpeakeasyBase {
  @Metadata({ data: "json, name=grpc" })
  grpc?: GrpcTimeout;

  @Metadata({ data: "json, name=http" })
  http?: HttpTimeout;

  @Metadata({ data: "json, name=http2" })
  http2?: HttpTimeout;

  @Metadata({ data: "json, name=tcp" })
  tcp?: TcpTimeout;
}
