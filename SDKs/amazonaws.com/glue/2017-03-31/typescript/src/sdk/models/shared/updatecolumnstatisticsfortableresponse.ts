import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColumnStatisticsError } from "./columnstatisticserror";


export class UpdateColumnStatisticsForTableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.ColumnStatisticsError })
  errors?: ColumnStatisticsError[];
}
