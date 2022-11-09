import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LifecyclePolicyPreviewFilter } from "./lifecyclepolicypreviewfilter";
import { ImageIdentifier } from "./imageidentifier";
export declare class GetLifecyclePolicyPreviewRequest extends SpeakeasyBase {
    filter?: LifecyclePolicyPreviewFilter;
    imageIds?: ImageIdentifier[];
    maxResults?: number;
    nextToken?: string;
    registryId?: string;
    repositoryName: string;
}
