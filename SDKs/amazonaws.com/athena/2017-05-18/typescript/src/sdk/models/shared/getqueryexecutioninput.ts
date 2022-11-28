import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueryExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QueryExecutionId" })
  queryExecutionId: string;
}
