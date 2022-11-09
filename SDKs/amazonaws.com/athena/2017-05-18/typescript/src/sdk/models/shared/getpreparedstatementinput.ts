import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPreparedStatementInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StatementName" })
  statementName: string;

  @Metadata({ data: "json, name=WorkGroup" })
  workGroup: string;
}
