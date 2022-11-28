import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Metrics
/** 
 *  Information about the statistics from the code review. 
**/
export class Metrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FindingsCount" })
  findingsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=MeteredLinesOfCodeCount" })
  meteredLinesOfCodeCount?: number;
}
