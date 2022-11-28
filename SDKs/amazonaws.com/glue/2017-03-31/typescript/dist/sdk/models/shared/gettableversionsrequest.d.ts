import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTableVersionsRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    maxResults?: number;
    nextToken?: string;
    tableName: string;
}
