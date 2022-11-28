import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeBackupsRequest extends SpeakeasyBase {
    filters?: Map<string, string[]>;
    maxResults?: number;
    nextToken?: string;
    sortAscending?: boolean;
}
