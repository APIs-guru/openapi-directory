import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaExtensionStatusEnum } from "./schemaextensionstatusenum";


// SchemaExtensionInfo
/** 
 * Information about a schema extension.
**/
export class SchemaExtensionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=SchemaExtensionId" })
  schemaExtensionId?: string;

  @Metadata({ data: "json, name=SchemaExtensionStatus" })
  schemaExtensionStatus?: SchemaExtensionStatusEnum;

  @Metadata({ data: "json, name=SchemaExtensionStatusReason" })
  schemaExtensionStatusReason?: string;

  @Metadata({ data: "json, name=StartDateTime" })
  startDateTime?: Date;
}
