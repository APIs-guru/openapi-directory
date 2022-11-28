import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaStatusEnum } from "./schemastatusenum";



// SchemaListItem
/** 
 * An object that contains minimal details for a schema.
**/
export class SchemaListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaName" })
  schemaName?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaStatus" })
  schemaStatus?: SchemaStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdatedTime" })
  updatedTime?: string;
}
