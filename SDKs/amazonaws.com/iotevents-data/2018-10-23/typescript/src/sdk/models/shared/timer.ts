import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Timer
/** 
 * The current state of a timer.
**/
export class Timer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
