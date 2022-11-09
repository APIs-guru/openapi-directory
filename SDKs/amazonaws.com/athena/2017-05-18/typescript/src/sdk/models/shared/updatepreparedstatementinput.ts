import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePreparedStatementInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=QueryStatement" })
  queryStatement: string;

  @Metadata({ data: "json, name=StatementName" })
  statementName: string;

  @Metadata({ data: "json, name=WorkGroup" })
  workGroup: string;
}
