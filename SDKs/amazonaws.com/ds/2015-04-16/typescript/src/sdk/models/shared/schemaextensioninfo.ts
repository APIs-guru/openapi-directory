import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaExtensionStatusEnum } from "./schemaextensionstatusenum";



// SchemaExtensionInfo
/** 
 * Information about a schema extension.
**/
export class SchemaExtensionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SchemaExtensionId" })
  schemaExtensionId?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaExtensionStatus" })
  schemaExtensionStatus?: SchemaExtensionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SchemaExtensionStatusReason" })
  schemaExtensionStatusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDateTime" })
  startDateTime?: Date;
}
