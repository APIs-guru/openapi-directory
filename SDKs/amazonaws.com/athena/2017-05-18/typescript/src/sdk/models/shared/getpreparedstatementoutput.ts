import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreparedStatement } from "./preparedstatement";



export class GetPreparedStatementOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PreparedStatement" })
  preparedStatement?: PreparedStatement;
}
