import { SpeakeasyBase } from "../../../internal/utils";
import { DataFormatEnum } from "./dataformatenum";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";
export declare class GetSchemaByDefinitionResponse extends SpeakeasyBase {
    createdTime?: string;
    dataFormat?: DataFormatEnum;
    schemaArn?: string;
    schemaVersionId?: string;
    status?: SchemaVersionStatusEnum;
}
