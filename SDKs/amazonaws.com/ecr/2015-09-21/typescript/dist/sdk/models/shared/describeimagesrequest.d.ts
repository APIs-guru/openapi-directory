import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DescribeImagesFilter } from "./describeimagesfilter";
import { ImageIdentifier } from "./imageidentifier";
export declare class DescribeImagesRequest extends SpeakeasyBase {
    filter?: DescribeImagesFilter;
    imageIds?: ImageIdentifier[];
    maxResults?: number;
    nextToken?: string;
    registryId?: string;
    repositoryName: string;
}
