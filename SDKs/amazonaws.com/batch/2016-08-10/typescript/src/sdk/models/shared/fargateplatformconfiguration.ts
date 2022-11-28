import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FargatePlatformConfiguration
/** 
 * The platform configuration for jobs that are running on Fargate resources. Jobs that run on EC2 resources must not specify this parameter.
**/
export class FargatePlatformConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=platformVersion" })
  platformVersion?: string;
}
