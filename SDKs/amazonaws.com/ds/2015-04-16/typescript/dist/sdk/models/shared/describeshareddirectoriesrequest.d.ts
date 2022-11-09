import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DescribeSharedDirectoriesRequest extends SpeakeasyBase {
    limit?: number;
    nextToken?: string;
    ownerDirectoryId: string;
    sharedDirectoryIds?: string[];
}
