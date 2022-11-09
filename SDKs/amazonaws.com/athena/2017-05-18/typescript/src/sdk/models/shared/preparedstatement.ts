import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PreparedStatement
/** 
 * A prepared SQL statement for use with Athena.
**/
export class PreparedStatement extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=QueryStatement" })
  queryStatement?: string;

  @Metadata({ data: "json, name=StatementName" })
  statementName?: string;

  @Metadata({ data: "json, name=WorkGroupName" })
  workGroupName?: string;
}
