import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransportProtocolEnum } from "./transportprotocolenum";


// NetworkBinding
/** 
 * Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.
**/
export class NetworkBinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=bindIP" })
  bindIp?: string;

  @Metadata({ data: "json, name=containerPort" })
  containerPort?: number;

  @Metadata({ data: "json, name=hostPort" })
  hostPort?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: TransportProtocolEnum;
}
