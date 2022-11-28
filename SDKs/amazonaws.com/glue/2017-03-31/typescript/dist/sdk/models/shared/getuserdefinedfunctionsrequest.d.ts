import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUserDefinedFunctionsRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName?: string;
    maxResults?: number;
    nextToken?: string;
    pattern: string;
}
