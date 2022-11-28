import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PreparedStatementSummary
/** 
 * The name and last modified time of the prepared statement.
**/
export class PreparedStatementSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StatementName" })
  statementName?: string;
}
