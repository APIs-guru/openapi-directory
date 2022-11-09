import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationInstance } from "./replicationinstance";


// DescribeReplicationInstancesResponse
/** 
 * <p/>
**/
export class DescribeReplicationInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=ReplicationInstances", elemType: shared.ReplicationInstance })
  replicationInstances?: ReplicationInstance[];
}
