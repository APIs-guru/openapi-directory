import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClusterSummary } from "./clustersummary";


// ListClustersOutput
/** 
 * This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status.
**/
export class ListClustersOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Clusters", elemType: shared.ClusterSummary })
  clusters?: ClusterSummary[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
