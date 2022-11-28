import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentVersionListItem } from "./componentversionlistitem";
export declare class ListComponentVersionsResponse extends SpeakeasyBase {
    componentVersions?: ComponentVersionListItem[];
    nextToken?: string;
}
