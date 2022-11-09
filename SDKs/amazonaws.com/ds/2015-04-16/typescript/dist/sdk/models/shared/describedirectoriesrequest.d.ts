import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains the inputs for the <a>DescribeDirectories</a> operation.
**/
export declare class DescribeDirectoriesRequest extends SpeakeasyBase {
    directoryIds?: string[];
    limit?: number;
    nextToken?: string;
}
