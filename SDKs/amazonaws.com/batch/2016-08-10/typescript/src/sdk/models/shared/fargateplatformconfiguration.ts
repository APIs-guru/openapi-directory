import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FargatePlatformConfiguration
/** 
 * The platform configuration for jobs that are running on Fargate resources. Jobs that run on EC2 resources must not specify this parameter.
**/
export class FargatePlatformConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=platformVersion" })
  platformVersion?: string;
}
