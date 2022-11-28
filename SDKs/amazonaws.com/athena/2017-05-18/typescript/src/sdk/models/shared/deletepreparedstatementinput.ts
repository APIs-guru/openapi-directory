import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePreparedStatementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StatementName" })
  statementName: string;

  @SpeakeasyMetadata({ data: "json, name=WorkGroup" })
  workGroup: string;
}
