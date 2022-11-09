import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EffectiveDeploymentExecutionStatusEnum } from "./effectivedeploymentexecutionstatusenum";


// EffectiveDeployment
/** 
 * Contains information about a deployment job that IoT Greengrass sends to a Greengrass core device.
**/
export class EffectiveDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=coreDeviceExecutionStatus" })
  coreDeviceExecutionStatus: EffectiveDeploymentExecutionStatusEnum;

  @Metadata({ data: "json, name=creationTimestamp" })
  creationTimestamp: Date;

  @Metadata({ data: "json, name=deploymentId" })
  deploymentId: string;

  @Metadata({ data: "json, name=deploymentName" })
  deploymentName: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=iotJobArn" })
  iotJobArn?: string;

  @Metadata({ data: "json, name=iotJobId" })
  iotJobId?: string;

  @Metadata({ data: "json, name=modifiedTimestamp" })
  modifiedTimestamp: Date;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=targetArn" })
  targetArn: string;
}
