import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageIdentifier } from "./imageidentifier";
export declare class DescribeImageScanFindingsRequest extends SpeakeasyBase {
    imageId: ImageIdentifier;
    maxResults?: number;
    nextToken?: string;
    registryId?: string;
    repositoryName: string;
}
