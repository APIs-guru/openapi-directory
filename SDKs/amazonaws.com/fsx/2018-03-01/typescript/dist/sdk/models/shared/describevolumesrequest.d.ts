import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeFilter } from "./volumefilter";
export declare class DescribeVolumesRequest extends SpeakeasyBase {
    filters?: VolumeFilter[];
    maxResults?: number;
    nextToken?: string;
    volumeIds?: string[];
}
