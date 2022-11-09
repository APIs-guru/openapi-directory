import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterStatus } from "./clusterstatus";


// ClusterSummary
/** 
 * The summary description of the cluster.
**/
export class ClusterSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NormalizedInstanceHours" })
  normalizedInstanceHours?: number;

  @Metadata({ data: "json, name=OutpostArn" })
  outpostArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ClusterStatus;
}
