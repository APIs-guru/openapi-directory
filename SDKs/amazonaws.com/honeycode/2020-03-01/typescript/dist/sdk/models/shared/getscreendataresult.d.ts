import { SpeakeasyBase } from "../../../internal/utils";
import { ResultSet } from "./resultset";
export declare class GetScreenDataResult extends SpeakeasyBase {
    nextToken?: string;
    results: Map<string, ResultSet>;
    workbookCursor: number;
}
