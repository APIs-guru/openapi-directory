import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Schedule
/** 
 * The schedule for when to trigger an update.
**/
export class Schedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;
}
