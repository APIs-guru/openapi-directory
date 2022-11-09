import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Cluster } from "./cluster";
export declare class DescribeClustersResponse extends SpeakeasyBase {
    clusters?: Cluster[];
    nextToken?: string;
}
