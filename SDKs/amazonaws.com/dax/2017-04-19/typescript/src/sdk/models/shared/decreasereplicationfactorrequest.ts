import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DecreaseReplicationFactorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @SpeakeasyMetadata({ data: "json, name=NewReplicationFactor" })
  newReplicationFactor: number;

  @SpeakeasyMetadata({ data: "json, name=NodeIdsToRemove" })
  nodeIdsToRemove?: string[];
}
