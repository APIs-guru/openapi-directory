import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryExecutionContext } from "./queryexecutioncontext";
import { ResultConfiguration } from "./resultconfiguration";



export class StartQueryExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=QueryExecutionContext" })
  queryExecutionContext?: QueryExecutionContext;

  @SpeakeasyMetadata({ data: "json, name=QueryString" })
  queryString: string;

  @SpeakeasyMetadata({ data: "json, name=ResultConfiguration" })
  resultConfiguration?: ResultConfiguration;

  @SpeakeasyMetadata({ data: "json, name=WorkGroup" })
  workGroup?: string;
}
