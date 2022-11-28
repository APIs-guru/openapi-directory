import { SpeakeasyBase } from "../../../internal/utils";
import { DbCluster } from "./dbcluster";
/**
 * Represents the output of <a>DescribeDBClusters</a>.
**/
export declare class DbClusterMessage extends SpeakeasyBase {
    dbClusters?: DbCluster[];
    marker?: string;
}
