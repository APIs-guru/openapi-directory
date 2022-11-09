import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DecreaseReplicationFactorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @Metadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @Metadata({ data: "json, name=NewReplicationFactor" })
  newReplicationFactor: number;

  @Metadata({ data: "json, name=NodeIdsToRemove" })
  nodeIdsToRemove?: string[];
}
