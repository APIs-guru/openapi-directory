import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimerDefinition
/** 
 * The new setting of a timer.
**/
export class TimerDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=seconds" })
  seconds: number;
}
