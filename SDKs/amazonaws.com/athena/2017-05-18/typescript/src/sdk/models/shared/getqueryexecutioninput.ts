import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueryExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=QueryExecutionId" })
  queryExecutionId: string;
}
