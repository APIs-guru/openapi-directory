import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaExtensionInfo } from "./schemaextensioninfo";
export declare class ListSchemaExtensionsResult extends SpeakeasyBase {
    nextToken?: string;
    schemaExtensionsInfo?: SchemaExtensionInfo[];
}
