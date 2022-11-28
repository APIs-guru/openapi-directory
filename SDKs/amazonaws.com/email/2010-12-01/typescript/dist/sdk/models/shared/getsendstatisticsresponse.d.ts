import { SpeakeasyBase } from "../../../internal/utils";
import { SendDataPoint } from "./senddatapoint";
/**
 * Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES.
**/
export declare class GetSendStatisticsResponse extends SpeakeasyBase {
    sendDataPoints?: SendDataPoint[];
}
