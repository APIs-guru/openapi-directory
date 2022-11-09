import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimerDefinition
/** 
 * The new setting of a timer.
**/
export class TimerDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=seconds" })
  seconds: number;
}
