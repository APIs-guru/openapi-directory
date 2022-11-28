import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableStatistics } from "./tablestatistics";



// DescribeTableStatisticsResponse
/** 
 * <p/>
**/
export class DescribeTableStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TableStatistics", elemType: TableStatistics })
  tableStatistics?: TableStatistics[];
}
