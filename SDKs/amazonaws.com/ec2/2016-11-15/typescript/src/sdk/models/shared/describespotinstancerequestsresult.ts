import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpotInstanceRequest } from "./spotinstancerequest";



// DescribeSpotInstanceRequestsResult
/** 
 * Contains the output of DescribeSpotInstanceRequests.
**/
export class DescribeSpotInstanceRequestsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: SpotInstanceRequest })
  spotInstanceRequests?: SpotInstanceRequest[];
}
