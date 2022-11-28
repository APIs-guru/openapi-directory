import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PreparedStatement
/** 
 * A prepared SQL statement for use with Athena.
**/
export class PreparedStatement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=QueryStatement" })
  queryStatement?: string;

  @SpeakeasyMetadata({ data: "json, name=StatementName" })
  statementName?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkGroupName" })
  workGroupName?: string;
}
