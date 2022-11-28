import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SendDataPoint } from "./senddatapoint";



// GetSendStatisticsResponse
/** 
 * Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES.
**/
export class GetSendStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SendDataPoint })
  sendDataPoints?: SendDataPoint[];
}
