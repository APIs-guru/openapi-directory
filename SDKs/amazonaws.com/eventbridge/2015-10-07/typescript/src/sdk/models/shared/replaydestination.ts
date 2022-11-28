import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplayDestination
/** 
 * A <code>ReplayDestination</code> object that contains details about a replay.
**/
export class ReplayDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=FilterArns" })
  filterArns?: string[];
}
