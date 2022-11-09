import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IncreaseReplicationFactorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @Metadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @Metadata({ data: "json, name=NewReplicationFactor" })
  newReplicationFactor: number;
}
