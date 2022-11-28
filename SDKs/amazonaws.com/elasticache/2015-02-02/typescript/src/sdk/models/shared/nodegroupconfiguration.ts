import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeGroupConfiguration
/** 
 * Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.
**/
export class NodeGroupConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nodeGroupId?: string;

  @SpeakeasyMetadata()
  primaryAvailabilityZone?: string;

  @SpeakeasyMetadata()
  primaryOutpostArn?: string;

  @SpeakeasyMetadata()
  replicaAvailabilityZones?: string[];

  @SpeakeasyMetadata()
  replicaCount?: number;

  @SpeakeasyMetadata()
  replicaOutpostArns?: string[];

  @SpeakeasyMetadata()
  slots?: string;
}
