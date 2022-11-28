import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterFieldEnum } from "./clusterfieldenum";



export class DescribeClustersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusters" })
  clusters?: string[];

  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: ClusterFieldEnum[];
}
