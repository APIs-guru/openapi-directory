import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeltaTime
/** 
 * Used to limit data to that which has arrived since the last execution of the action.
**/
export class DeltaTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=offsetSeconds" })
  offsetSeconds: number;

  @Metadata({ data: "json, name=timeExpression" })
  timeExpression: string;
}
