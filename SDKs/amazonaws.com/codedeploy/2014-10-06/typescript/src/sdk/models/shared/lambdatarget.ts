import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionInfo } from "./lambdafunctioninfo";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";



// LambdaTarget
/** 
 *  Information about the target AWS Lambda function during an AWS Lambda deployment. 
**/
export class LambdaTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionInfo" })
  lambdaFunctionInfo?: LambdaFunctionInfo;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lifecycleEvents", elemType: LifecycleEvent })
  lifecycleEvents?: LifecycleEvent[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TargetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: string;
}
