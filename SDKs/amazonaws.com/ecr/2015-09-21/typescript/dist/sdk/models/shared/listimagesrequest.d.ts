import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ListImagesFilter } from "./listimagesfilter";
export declare class ListImagesRequest extends SpeakeasyBase {
    filter?: ListImagesFilter;
    maxResults?: number;
    nextToken?: string;
    registryId?: string;
    repositoryName: string;
}
