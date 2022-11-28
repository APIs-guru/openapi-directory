import { SpeakeasyBase } from "../../../internal/utils";
import { PreparedStatementSummary } from "./preparedstatementsummary";
export declare class ListPreparedStatementsOutput extends SpeakeasyBase {
    nextToken?: string;
    preparedStatements?: PreparedStatementSummary[];
}
