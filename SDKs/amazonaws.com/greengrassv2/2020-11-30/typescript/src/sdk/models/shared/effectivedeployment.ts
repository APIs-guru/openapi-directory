import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EffectiveDeploymentExecutionStatusEnum } from "./effectivedeploymentexecutionstatusenum";



// EffectiveDeployment
/** 
 * Contains information about a deployment job that IoT Greengrass sends to a Greengrass core device.
**/
export class EffectiveDeployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coreDeviceExecutionStatus" })
  coreDeviceExecutionStatus: EffectiveDeploymentExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=creationTimestamp" })
  creationTimestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentName" })
  deploymentName: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=iotJobArn" })
  iotJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=iotJobId" })
  iotJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedTimestamp" })
  modifiedTimestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn: string;
}
