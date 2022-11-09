import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PreparedStatementSummary
/** 
 * The name and last modified time of the prepared statement.
**/
export class PreparedStatementSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=StatementName" })
  statementName?: string;
}
