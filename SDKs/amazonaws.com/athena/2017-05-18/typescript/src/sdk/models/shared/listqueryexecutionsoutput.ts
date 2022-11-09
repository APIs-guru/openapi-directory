import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListQueryExecutionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=QueryExecutionIds" })
  queryExecutionIds?: string[];
}
