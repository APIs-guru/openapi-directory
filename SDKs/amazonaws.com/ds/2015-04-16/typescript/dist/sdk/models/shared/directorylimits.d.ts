import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains directory limit information for a Region.
**/
export declare class DirectoryLimits extends SpeakeasyBase {
    cloudOnlyDirectoriesCurrentCount?: number;
    cloudOnlyDirectoriesLimit?: number;
    cloudOnlyDirectoriesLimitReached?: boolean;
    cloudOnlyMicrosoftAdCurrentCount?: number;
    cloudOnlyMicrosoftAdLimit?: number;
    cloudOnlyMicrosoftAdLimitReached?: boolean;
    connectedDirectoriesCurrentCount?: number;
    connectedDirectoriesLimit?: number;
    connectedDirectoriesLimitReached?: boolean;
}
