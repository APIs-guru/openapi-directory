import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Schedule
/** 
 * The schedule for when to trigger an update.
**/
export class Schedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=expression" })
  expression?: string;
}
