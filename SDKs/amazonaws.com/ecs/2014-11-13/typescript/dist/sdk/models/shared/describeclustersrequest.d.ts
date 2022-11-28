import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterFieldEnum } from "./clusterfieldenum";
export declare class DescribeClustersRequest extends SpeakeasyBase {
    clusters?: string[];
    include?: ClusterFieldEnum[];
}
