import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterStateEnum } from "./clusterstateenum";



// ListClustersInput
/** 
 * This input determines how the ListClusters action filters the list of clusters that it returns.
**/
export class ListClustersInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterStates" })
  clusterStates?: ClusterStateEnum[];

  @SpeakeasyMetadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
