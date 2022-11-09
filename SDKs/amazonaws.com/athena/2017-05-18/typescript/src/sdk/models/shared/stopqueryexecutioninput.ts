import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopQueryExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=QueryExecutionId" })
  queryExecutionId: string;
}
