import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";



// SchemaVersionListItem
/** 
 * An object containing the details about a schema version.
**/
export class SchemaVersionListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: SchemaVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=VersionNumber" })
  versionNumber?: number;
}
