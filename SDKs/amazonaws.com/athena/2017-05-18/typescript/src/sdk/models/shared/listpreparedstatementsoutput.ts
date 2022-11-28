import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreparedStatementSummary } from "./preparedstatementsummary";



export class ListPreparedStatementsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PreparedStatements", elemType: PreparedStatementSummary })
  preparedStatements?: PreparedStatementSummary[];
}
