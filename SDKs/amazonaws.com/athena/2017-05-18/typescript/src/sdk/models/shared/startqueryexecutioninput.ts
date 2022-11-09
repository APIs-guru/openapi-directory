import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryExecutionContext } from "./queryexecutioncontext";
import { ResultConfiguration } from "./resultconfiguration";


export class StartQueryExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=QueryExecutionContext" })
  queryExecutionContext?: QueryExecutionContext;

  @Metadata({ data: "json, name=QueryString" })
  queryString: string;

  @Metadata({ data: "json, name=ResultConfiguration" })
  resultConfiguration?: ResultConfiguration;

  @Metadata({ data: "json, name=WorkGroup" })
  workGroup?: string;
}
