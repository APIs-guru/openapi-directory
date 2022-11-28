import { SpeakeasyBase } from "../../../internal/utils";
import { MatchRange } from "./matchrange";
/**
 * An object that represents the match method. Specify one of the match values.
**/
export declare class GrpcRouteMetadataMatchMethod extends SpeakeasyBase {
    exact?: string;
    prefix?: string;
    range?: MatchRange;
    regex?: string;
    suffix?: string;
}
