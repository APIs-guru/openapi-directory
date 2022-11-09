import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResultSet } from "./resultset";


export class GetQueryResultsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResultSet" })
  resultSet?: ResultSet;

  @Metadata({ data: "json, name=UpdateCount" })
  updateCount?: number;
}
