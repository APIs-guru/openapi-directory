import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeltaTime
/** 
 * Used to limit data to that which has arrived since the last execution of the action.
**/
export class DeltaTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offsetSeconds" })
  offsetSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=timeExpression" })
  timeExpression: string;
}
