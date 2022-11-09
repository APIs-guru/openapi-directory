import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Metrics
/** 
 *  Information about the statistics from the code review. 
**/
export class Metrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=FindingsCount" })
  findingsCount?: number;

  @Metadata({ data: "json, name=MeteredLinesOfCodeCount" })
  meteredLinesOfCodeCount?: number;
}
