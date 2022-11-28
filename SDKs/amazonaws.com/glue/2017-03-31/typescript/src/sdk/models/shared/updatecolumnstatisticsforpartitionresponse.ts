import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnStatisticsError } from "./columnstatisticserror";



export class UpdateColumnStatisticsForPartitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: ColumnStatisticsError })
  errors?: ColumnStatisticsError[];
}
