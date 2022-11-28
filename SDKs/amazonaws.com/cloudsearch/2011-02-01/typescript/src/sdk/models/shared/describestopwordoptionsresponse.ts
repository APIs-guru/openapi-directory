import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StopwordOptionsStatus } from "./stopwordoptionsstatus";



// DescribeStopwordOptionsResponse
/** 
 * A response message that contains the stopword options for a search domain.
**/
export class DescribeStopwordOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  stopwords: StopwordOptionsStatus;
}
