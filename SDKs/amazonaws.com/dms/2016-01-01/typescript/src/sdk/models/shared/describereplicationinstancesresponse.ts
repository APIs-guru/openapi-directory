import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationInstance } from "./replicationinstance";



// DescribeReplicationInstancesResponse
/** 
 * <p/>
**/
export class DescribeReplicationInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstances", elemType: ReplicationInstance })
  replicationInstances?: ReplicationInstance[];
}
