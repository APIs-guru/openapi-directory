import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusCodes } from "./statuscodes";



// OriginGroupFailoverCriteria
/** 
 * A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.
**/
export class OriginGroupFailoverCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata()
  statusCodes: StatusCodes;
}
