import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSpan } from "./timespan";
/**
 * Settings for one clip in a composition. All jobs in a playlist must have the same clip settings.
**/
export declare class Clip extends SpeakeasyBase {
    timeSpan?: TimeSpan;
}
