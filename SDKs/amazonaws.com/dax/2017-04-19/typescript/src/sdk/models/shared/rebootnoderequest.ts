import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RebootNodeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @Metadata({ data: "json, name=NodeId" })
  nodeId: string;
}
