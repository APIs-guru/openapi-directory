import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeltaTime } from "./deltatime";



// QueryFilter
/** 
 * Information that is used to filter message data, to segregate it according to the timeframe in which it arrives.
**/
export class QueryFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deltaTime" })
  deltaTime?: DeltaTime;
}
