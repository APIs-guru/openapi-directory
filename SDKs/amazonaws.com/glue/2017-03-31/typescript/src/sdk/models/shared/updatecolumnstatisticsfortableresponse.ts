import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnStatisticsError } from "./columnstatisticserror";



export class UpdateColumnStatisticsForTableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: ColumnStatisticsError })
  errors?: ColumnStatisticsError[];
}
