import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";



// TableVersion
/** 
 * Specifies a version of a table.
**/
export class TableVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Table" })
  table?: Table;

  @SpeakeasyMetadata({ data: "json, name=VersionId" })
  versionId?: string;
}
