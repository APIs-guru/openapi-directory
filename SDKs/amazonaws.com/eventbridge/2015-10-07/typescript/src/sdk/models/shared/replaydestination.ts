import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplayDestination
/** 
 * A <code>ReplayDestination</code> object that contains details about a replay.
**/
export class ReplayDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=FilterArns" })
  filterArns?: string[];
}
