import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationMetrics } from "./applicationmetrics";
import { InstanceHealthSummary } from "./instancehealthsummary";
import { EnvironmentHealthEnum } from "./environmenthealthenum";



// DescribeEnvironmentHealthResult
/** 
 * Health details for an AWS Elastic Beanstalk environment.
**/
export class DescribeEnvironmentHealthResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationMetrics?: ApplicationMetrics;

  @SpeakeasyMetadata()
  causes?: string[];

  @SpeakeasyMetadata()
  color?: string;

  @SpeakeasyMetadata()
  environmentName?: string;

  @SpeakeasyMetadata()
  healthStatus?: string;

  @SpeakeasyMetadata()
  instancesHealth?: InstanceHealthSummary;

  @SpeakeasyMetadata()
  refreshedAt?: Date;

  @SpeakeasyMetadata()
  status?: EnvironmentHealthEnum;
}
