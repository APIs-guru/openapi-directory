import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeltaTime } from "./deltatime";
/**
 * Information that is used to filter message data, to segregate it according to the timeframe in which it arrives.
**/
export declare class QueryFilter extends SpeakeasyBase {
    deltaTime?: DeltaTime;
}
