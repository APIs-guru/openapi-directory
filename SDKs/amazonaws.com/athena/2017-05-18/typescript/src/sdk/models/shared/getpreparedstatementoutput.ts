import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PreparedStatement } from "./preparedstatement";


export class GetPreparedStatementOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PreparedStatement" })
  preparedStatement?: PreparedStatement;
}
