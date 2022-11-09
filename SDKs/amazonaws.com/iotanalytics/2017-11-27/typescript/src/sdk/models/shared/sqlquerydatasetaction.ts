import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QueryFilter } from "./queryfilter";


// SqlQueryDatasetAction
/** 
 * The SQL query to modify the message.
**/
export class SqlQueryDatasetAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.QueryFilter })
  filters?: QueryFilter[];

  @Metadata({ data: "json, name=sqlQuery" })
  sqlQuery: string;
}
