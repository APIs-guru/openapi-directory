import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListQueryExecutionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=QueryExecutionIds" })
  queryExecutionIds?: string[];
}
