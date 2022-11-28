import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";
export declare class RegisterSchemaVersionResponse extends SpeakeasyBase {
    schemaVersionId?: string;
    status?: SchemaVersionStatusEnum;
    versionNumber?: number;
}
