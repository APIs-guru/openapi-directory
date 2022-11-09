import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TableStatistics } from "./tablestatistics";
/**
 * <p/>
**/
export declare class DescribeTableStatisticsResponse extends SpeakeasyBase {
    marker?: string;
    replicationTaskArn?: string;
    tableStatistics?: TableStatistics[];
}
