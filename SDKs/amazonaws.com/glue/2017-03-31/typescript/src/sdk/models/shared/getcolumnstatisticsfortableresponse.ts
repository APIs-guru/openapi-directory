import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColumnStatistics } from "./columnstatistics";
import { ColumnError } from "./columnerror";


export class GetColumnStatisticsForTableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ColumnStatisticsList", elemType: shared.ColumnStatistics })
  columnStatisticsList?: ColumnStatistics[];

  @Metadata({ data: "json, name=Errors", elemType: shared.ColumnError })
  errors?: ColumnError[];
}
