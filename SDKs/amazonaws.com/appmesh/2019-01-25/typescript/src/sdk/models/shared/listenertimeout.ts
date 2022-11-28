import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcTimeout } from "./grpctimeout";
import { HttpTimeout } from "./httptimeout";
import { TcpTimeout } from "./tcptimeout";



// ListenerTimeout
/** 
 * An object that represents timeouts for different protocols.
**/
export class ListenerTimeout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grpc" })
  grpc?: GrpcTimeout;

  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: HttpTimeout;

  @SpeakeasyMetadata({ data: "json, name=http2" })
  http2?: HttpTimeout;

  @SpeakeasyMetadata({ data: "json, name=tcp" })
  tcp?: TcpTimeout;
}
