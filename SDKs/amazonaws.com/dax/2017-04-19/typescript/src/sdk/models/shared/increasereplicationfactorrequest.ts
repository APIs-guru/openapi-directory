import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IncreaseReplicationFactorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @SpeakeasyMetadata({ data: "json, name=NewReplicationFactor" })
  newReplicationFactor: number;
}
