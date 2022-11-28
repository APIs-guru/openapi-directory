import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";
/**
 * An object containing the details about a schema version.
**/
export declare class SchemaVersionListItem extends SpeakeasyBase {
    createdTime?: string;
    schemaArn?: string;
    schemaVersionId?: string;
    status?: SchemaVersionStatusEnum;
    versionNumber?: number;
}
