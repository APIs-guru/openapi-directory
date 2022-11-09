import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Table } from "./table";


// TableVersion
/** 
 * Specifies a version of a table.
**/
export class TableVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Table" })
  table?: Table;

  @Metadata({ data: "json, name=VersionId" })
  versionId?: string;
}
