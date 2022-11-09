import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartQueryExecutionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=QueryExecutionId" })
  queryExecutionId?: string;
}
