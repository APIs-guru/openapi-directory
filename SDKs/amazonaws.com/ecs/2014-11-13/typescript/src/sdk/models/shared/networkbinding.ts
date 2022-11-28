import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransportProtocolEnum } from "./transportprotocolenum";



// NetworkBinding
/** 
 * Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.
**/
export class NetworkBinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bindIP" })
  bindIp?: string;

  @SpeakeasyMetadata({ data: "json, name=containerPort" })
  containerPort?: number;

  @SpeakeasyMetadata({ data: "json, name=hostPort" })
  hostPort?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: TransportProtocolEnum;
}
