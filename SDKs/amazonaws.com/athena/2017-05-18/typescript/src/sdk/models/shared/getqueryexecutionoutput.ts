import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryExecution } from "./queryexecution";



export class GetQueryExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QueryExecution" })
  queryExecution?: QueryExecution;
}
