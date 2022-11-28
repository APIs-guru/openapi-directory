import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaStatusEnum } from "./schemastatusenum";
/**
 * An object that contains minimal details for a schema.
**/
export declare class SchemaListItem extends SpeakeasyBase {
    createdTime?: string;
    description?: string;
    registryName?: string;
    schemaArn?: string;
    schemaName?: string;
    schemaStatus?: SchemaStatusEnum;
    updatedTime?: string;
}
