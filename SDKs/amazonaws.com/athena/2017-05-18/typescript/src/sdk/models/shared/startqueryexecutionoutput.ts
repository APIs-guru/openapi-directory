import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartQueryExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QueryExecutionId" })
  queryExecutionId?: string;
}
