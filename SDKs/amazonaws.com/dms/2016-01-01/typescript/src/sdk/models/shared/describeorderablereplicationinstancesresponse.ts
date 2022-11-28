import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderableReplicationInstance } from "./orderablereplicationinstance";



// DescribeOrderableReplicationInstancesResponse
/** 
 * <p/>
**/
export class DescribeOrderableReplicationInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=OrderableReplicationInstances", elemType: OrderableReplicationInstance })
  orderableReplicationInstances?: OrderableReplicationInstance[];
}
