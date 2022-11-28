import { SpeakeasyBase } from "../../../internal/utils";
import { DataFormatEnum } from "./dataformatenum";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";
export declare class GetSchemaVersionResponse extends SpeakeasyBase {
    createdTime?: string;
    dataFormat?: DataFormatEnum;
    schemaArn?: string;
    schemaDefinition?: string;
    schemaVersionId?: string;
    status?: SchemaVersionStatusEnum;
    versionNumber?: number;
}
