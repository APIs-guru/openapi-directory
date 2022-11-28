import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetQueryExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QueryExecutionIds" })
  queryExecutionIds: string[];
}
