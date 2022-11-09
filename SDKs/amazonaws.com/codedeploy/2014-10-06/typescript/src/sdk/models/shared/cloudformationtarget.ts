import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";


// CloudFormationTarget
/** 
 *  Information about the target to be updated by an AWS CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.
**/
export class CloudFormationTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=lifecycleEvents", elemType: shared.LifecycleEvent })
  lifecycleEvents?: LifecycleEvent[];

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=status" })
  status?: TargetStatusEnum;

  @Metadata({ data: "json, name=targetId" })
  targetId?: string;

  @Metadata({ data: "json, name=targetVersionWeight" })
  targetVersionWeight?: number;
}
