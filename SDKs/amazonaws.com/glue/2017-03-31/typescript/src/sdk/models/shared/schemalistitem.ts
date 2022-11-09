import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaStatusEnum } from "./schemastatusenum";


// SchemaListItem
/** 
 * An object that contains minimal details for a schema.
**/
export class SchemaListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @Metadata({ data: "json, name=SchemaName" })
  schemaName?: string;

  @Metadata({ data: "json, name=SchemaStatus" })
  schemaStatus?: SchemaStatusEnum;

  @Metadata({ data: "json, name=UpdatedTime" })
  updatedTime?: string;
}
