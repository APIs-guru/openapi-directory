import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PreparedStatementSummary } from "./preparedstatementsummary";


export class ListPreparedStatementsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PreparedStatements", elemType: shared.PreparedStatementSummary })
  preparedStatements?: PreparedStatementSummary[];
}
