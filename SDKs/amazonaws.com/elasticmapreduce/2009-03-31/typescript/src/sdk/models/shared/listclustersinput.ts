import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterStateEnum } from "./clusterstateenum";


// ListClustersInput
/** 
 * This input determines how the ListClusters action filters the list of clusters that it returns.
**/
export class ListClustersInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterStates" })
  clusterStates?: ClusterStateEnum[];

  @Metadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
