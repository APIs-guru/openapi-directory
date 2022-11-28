import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnStatistics } from "./columnstatistics";
import { ColumnError } from "./columnerror";



export class GetColumnStatisticsForPartitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ColumnStatisticsList", elemType: ColumnStatistics })
  columnStatisticsList?: ColumnStatistics[];

  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: ColumnError })
  errors?: ColumnError[];
}
