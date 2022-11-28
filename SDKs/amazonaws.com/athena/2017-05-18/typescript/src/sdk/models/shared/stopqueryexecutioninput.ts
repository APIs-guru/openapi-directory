import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopQueryExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QueryExecutionId" })
  queryExecutionId: string;
}
