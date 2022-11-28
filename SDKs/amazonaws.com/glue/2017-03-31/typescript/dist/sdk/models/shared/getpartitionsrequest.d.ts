import { SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";
export declare class GetPartitionsRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    excludeColumnSchema?: boolean;
    expression?: string;
    maxResults?: number;
    nextToken?: string;
    segment?: Segment;
    tableName: string;
}
