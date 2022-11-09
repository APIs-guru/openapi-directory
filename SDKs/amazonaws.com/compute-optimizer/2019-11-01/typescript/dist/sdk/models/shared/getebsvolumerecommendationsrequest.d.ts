import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EbsFilter } from "./ebsfilter";
export declare class GetEbsVolumeRecommendationsRequest extends SpeakeasyBase {
    accountIds?: string[];
    filters?: EbsFilter[];
    maxResults?: number;
    nextToken?: string;
    volumeArns?: string[];
}
