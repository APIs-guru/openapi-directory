import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Endpoint } from "./endpoint";


// Node
/** 
 * Represents an individual node within a DAX cluster.
**/
export class Node extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: Endpoint;

  @Metadata({ data: "json, name=NodeCreateTime" })
  nodeCreateTime?: Date;

  @Metadata({ data: "json, name=NodeId" })
  nodeId?: string;

  @Metadata({ data: "json, name=NodeStatus" })
  nodeStatus?: string;

  @Metadata({ data: "json, name=ParameterGroupStatus" })
  parameterGroupStatus?: string;
}
