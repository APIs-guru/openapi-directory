import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveInstance } from "./activeinstance";



// DescribeSpotFleetInstancesResponse
/** 
 * Contains the output of DescribeSpotFleetInstances.
**/
export class DescribeSpotFleetInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ActiveInstance })
  activeInstances?: ActiveInstance[];

  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata()
  spotFleetRequestId?: string;
}
