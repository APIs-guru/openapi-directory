import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StemmingOptionsStatus } from "./stemmingoptionsstatus";



// DescribeStemmingOptionsResponse
/** 
 * A response message that contains the stemming options for a search domain.
**/
export class DescribeStemmingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  stems: StemmingOptionsStatus;
}
