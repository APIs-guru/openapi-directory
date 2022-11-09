import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TargetGroupInfo
/** 
 * Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group.
**/
export class TargetGroupInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
