import { SpeakeasyBase } from "../../../internal/utils";
import { ResultSet } from "./resultset";
export declare class GetQueryResultsOutput extends SpeakeasyBase {
    nextToken?: string;
    resultSet?: ResultSet;
    updateCount?: number;
}
