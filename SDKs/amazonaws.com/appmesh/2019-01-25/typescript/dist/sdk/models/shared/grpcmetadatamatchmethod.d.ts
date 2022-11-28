import { SpeakeasyBase } from "../../../internal/utils";
import { MatchRange } from "./matchrange";
/**
 * An object representing the method header to be matched.
**/
export declare class GrpcMetadataMatchMethod extends SpeakeasyBase {
    exact?: string;
    prefix?: string;
    range?: MatchRange;
    regex?: string;
    suffix?: string;
}
