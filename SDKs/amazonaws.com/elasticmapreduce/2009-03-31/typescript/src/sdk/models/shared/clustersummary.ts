import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterStatus } from "./clusterstatus";



// ClusterSummary
/** 
 * The summary description of the cluster.
**/
export class ClusterSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NormalizedInstanceHours" })
  normalizedInstanceHours?: number;

  @SpeakeasyMetadata({ data: "json, name=OutpostArn" })
  outpostArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ClusterStatus;
}
