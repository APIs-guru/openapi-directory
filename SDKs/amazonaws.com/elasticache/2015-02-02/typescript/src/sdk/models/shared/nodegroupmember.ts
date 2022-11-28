import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";



// NodeGroupMember
/** 
 * Represents a single node within a node group (shard).
**/
export class NodeGroupMember extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheClusterId?: string;

  @SpeakeasyMetadata()
  cacheNodeId?: string;

  @SpeakeasyMetadata()
  currentRole?: string;

  @SpeakeasyMetadata()
  preferredAvailabilityZone?: string;

  @SpeakeasyMetadata()
  preferredOutpostArn?: string;

  @SpeakeasyMetadata()
  readEndpoint?: Endpoint;
}
