import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Latency } from "./latency";
import { StatusCodes } from "./statuscodes";



// ApplicationMetrics
/** 
 * Application request metrics for an AWS Elastic Beanstalk environment.
**/
export class ApplicationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  latency?: Latency;

  @SpeakeasyMetadata()
  requestCount?: number;

  @SpeakeasyMetadata()
  statusCodes?: StatusCodes;
}
