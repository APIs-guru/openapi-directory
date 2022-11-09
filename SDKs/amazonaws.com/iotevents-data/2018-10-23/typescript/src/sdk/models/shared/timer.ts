import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Timer
/** 
 * The current state of a timer.
**/
export class Timer extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
