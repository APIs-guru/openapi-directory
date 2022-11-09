import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeploymentCircuitBreaker
/** 
 * <note> <p>The deployment circuit breaker can only be used for services using the rolling update (<code>ECS</code>) deployment type that are not behind a Classic Load Balancer.</p> </note> <p>The <b>deployment circuit breaker</b> determines whether a service deployment will fail if the service can't reach a steady state. If enabled, a service deployment will transition to a failed state and stop launching new tasks. You can also enable Amazon ECS to roll back your service to the last completed deployment after a failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling update</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
**/
export class DeploymentCircuitBreaker extends SpeakeasyBase {
  @Metadata({ data: "json, name=enable" })
  enable: boolean;

  @Metadata({ data: "json, name=rollback" })
  rollback: boolean;
}
