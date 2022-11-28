import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpotFleetRequestConfig } from "./spotfleetrequestconfig";



// DescribeSpotFleetRequestsResponse
/** 
 * Contains the output of DescribeSpotFleetRequests.
**/
export class DescribeSpotFleetRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: SpotFleetRequestConfig })
  spotFleetRequestConfigs?: SpotFleetRequestConfig[];
}
