import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddInstanceFleetOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=InstanceFleetId" })
  instanceFleetId?: string;
}
