import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryExecution } from "./queryexecution";


export class GetQueryExecutionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=QueryExecution" })
  queryExecution?: QueryExecution;
}
