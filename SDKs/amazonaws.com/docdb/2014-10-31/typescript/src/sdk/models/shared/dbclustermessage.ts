import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbCluster } from "./dbcluster";



// DbClusterMessage
/** 
 * Represents the output of <a>DescribeDBClusters</a>.
**/
export class DbClusterMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbCluster })
  dbClusters?: DbCluster[];

  @SpeakeasyMetadata()
  marker?: string;
}
