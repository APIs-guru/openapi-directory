import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterFieldEnum } from "./clusterfieldenum";


export class DescribeClustersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusters" })
  clusters?: string[];

  @Metadata({ data: "json, name=include" })
  include?: ClusterFieldEnum[];
}
