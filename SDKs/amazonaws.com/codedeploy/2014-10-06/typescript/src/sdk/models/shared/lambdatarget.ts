import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LambdaFunctionInfo } from "./lambdafunctioninfo";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";


// LambdaTarget
/** 
 *  Information about the target AWS Lambda function during an AWS Lambda deployment. 
**/
export class LambdaTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=lambdaFunctionInfo" })
  lambdaFunctionInfo?: LambdaFunctionInfo;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=lifecycleEvents", elemType: shared.LifecycleEvent })
  lifecycleEvents?: LifecycleEvent[];

  @Metadata({ data: "json, name=status" })
  status?: TargetStatusEnum;

  @Metadata({ data: "json, name=targetArn" })
  targetArn?: string;

  @Metadata({ data: "json, name=targetId" })
  targetId?: string;
}
