import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationMetrics } from "./applicationmetrics";
import { Deployment } from "./deployment";
import { SystemStatus } from "./systemstatus";



// SingleInstanceHealth
/** 
 * Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment.
**/
export class SingleInstanceHealth extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationMetrics?: ApplicationMetrics;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  causes?: string[];

  @SpeakeasyMetadata()
  color?: string;

  @SpeakeasyMetadata()
  deployment?: Deployment;

  @SpeakeasyMetadata()
  healthStatus?: string;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  instanceType?: string;

  @SpeakeasyMetadata()
  launchedAt?: Date;

  @SpeakeasyMetadata()
  system?: SystemStatus;
}
