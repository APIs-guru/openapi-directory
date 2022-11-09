import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProxyConfigurationTypeEnum } from "./proxyconfigurationtypeenum";


// ProxyConfiguration
/** 
 * <p>The configuration details for the App Mesh proxy.</p> <p>For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to enable a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> </p>
**/
export class ProxyConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerName" })
  containerName: string;

  @Metadata({ data: "json, name=properties" })
  properties?: any;

  @Metadata({ data: "json, name=type" })
  type?: ProxyConfigurationTypeEnum;
}
