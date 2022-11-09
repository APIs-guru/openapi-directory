import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableStatistics } from "./tablestatistics";


// DescribeTableStatisticsResponse
/** 
 * <p/>
**/
export class DescribeTableStatisticsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;

  @Metadata({ data: "json, name=TableStatistics", elemType: shared.TableStatistics })
  tableStatistics?: TableStatistics[];
}
