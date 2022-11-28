import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultSet } from "./resultset";



export class GetQueryResultsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResultSet" })
  resultSet?: ResultSet;

  @SpeakeasyMetadata({ data: "json, name=UpdateCount" })
  updateCount?: number;
}
