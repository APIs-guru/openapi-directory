import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SingleInstanceHealth } from "./singleinstancehealth";



// DescribeInstancesHealthResult
/** 
 * Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment.
**/
export class DescribeInstancesHealthResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SingleInstanceHealth })
  instanceHealthList?: SingleInstanceHealth[];

  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata()
  refreshedAt?: Date;
}
