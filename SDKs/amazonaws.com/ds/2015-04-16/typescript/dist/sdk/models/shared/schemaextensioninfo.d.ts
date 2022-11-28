import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaExtensionStatusEnum } from "./schemaextensionstatusenum";
/**
 * Information about a schema extension.
**/
export declare class SchemaExtensionInfo extends SpeakeasyBase {
    description?: string;
    directoryId?: string;
    endDateTime?: Date;
    schemaExtensionId?: string;
    schemaExtensionStatus?: SchemaExtensionStatusEnum;
    schemaExtensionStatusReason?: string;
    startDateTime?: Date;
}
