import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";



// Node
/** 
 * Represents an individual node within a DAX cluster.
**/
export class Node extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: Endpoint;

  @SpeakeasyMetadata({ data: "json, name=NodeCreateTime" })
  nodeCreateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NodeId" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=NodeStatus" })
  nodeStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupStatus" })
  parameterGroupStatus?: string;
}
