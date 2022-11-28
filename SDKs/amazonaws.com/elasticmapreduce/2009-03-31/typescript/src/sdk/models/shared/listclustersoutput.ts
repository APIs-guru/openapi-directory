import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSummary } from "./clustersummary";



// ListClustersOutput
/** 
 * This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status.
**/
export class ListClustersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Clusters", elemType: ClusterSummary })
  clusters?: ClusterSummary[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
