import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePreparedStatementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=QueryStatement" })
  queryStatement: string;

  @SpeakeasyMetadata({ data: "json, name=StatementName" })
  statementName: string;

  @SpeakeasyMetadata({ data: "json, name=WorkGroup" })
  workGroup: string;
}
