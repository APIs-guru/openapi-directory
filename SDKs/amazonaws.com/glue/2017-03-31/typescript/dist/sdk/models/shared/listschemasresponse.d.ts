import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaListItem } from "./schemalistitem";
export declare class ListSchemasResponse extends SpeakeasyBase {
    nextToken?: string;
    schemas?: SchemaListItem[];
}
