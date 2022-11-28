import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryFilter } from "./queryfilter";



// SqlQueryDatasetAction
/** 
 * The SQL query to modify the message.
**/
export class SqlQueryDatasetAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: QueryFilter })
  filters?: QueryFilter[];

  @SpeakeasyMetadata({ data: "json, name=sqlQuery" })
  sqlQuery: string;
}
