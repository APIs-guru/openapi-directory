import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RebootNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @SpeakeasyMetadata({ data: "json, name=NodeId" })
  nodeId: string;
}
