import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";


// SchemaVersionListItem
/** 
 * An object containing the details about a schema version.
**/
export class SchemaVersionListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @Metadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: SchemaVersionStatusEnum;

  @Metadata({ data: "json, name=VersionNumber" })
  versionNumber?: number;
}
