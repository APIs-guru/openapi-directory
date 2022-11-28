import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaVersionListItem } from "./schemaversionlistitem";
export declare class ListSchemaVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    schemas?: SchemaVersionListItem[];
}
