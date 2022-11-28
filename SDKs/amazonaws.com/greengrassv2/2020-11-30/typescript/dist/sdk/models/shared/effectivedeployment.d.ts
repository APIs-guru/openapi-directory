import { SpeakeasyBase } from "../../../internal/utils";
import { EffectiveDeploymentExecutionStatusEnum } from "./effectivedeploymentexecutionstatusenum";
/**
 * Contains information about a deployment job that IoT Greengrass sends to a Greengrass core device.
**/
export declare class EffectiveDeployment extends SpeakeasyBase {
    coreDeviceExecutionStatus: EffectiveDeploymentExecutionStatusEnum;
    creationTimestamp: Date;
    deploymentId: string;
    deploymentName: string;
    description?: string;
    iotJobArn?: string;
    iotJobId?: string;
    modifiedTimestamp: Date;
    reason?: string;
    targetArn: string;
}
