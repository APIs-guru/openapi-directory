import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddInstanceFleetOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceFleetId" })
  instanceFleetId?: string;
}
