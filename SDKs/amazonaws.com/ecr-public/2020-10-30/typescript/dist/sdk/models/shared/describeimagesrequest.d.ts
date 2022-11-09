import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageIdentifier } from "./imageidentifier";
export declare class DescribeImagesRequest extends SpeakeasyBase {
    imageIds?: ImageIdentifier[];
    maxResults?: number;
    nextToken?: string;
    registryId?: string;
    repositoryName: string;
}
