import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerTypeEnum } from "./workertypeenum";
export declare class CreateDevEndpointResponse extends SpeakeasyBase {
    arguments?: Map<string, string>;
    availabilityZone?: string;
    createdTimestamp?: Date;
    endpointName?: string;
    extraJarsS3Path?: string;
    extraPythonLibsS3Path?: string;
    failureReason?: string;
    glueVersion?: string;
    numberOfNodes?: number;
    numberOfWorkers?: number;
    roleArn?: string;
    securityConfiguration?: string;
    securityGroupIds?: string[];
    status?: string;
    subnetId?: string;
    vpcId?: string;
    workerType?: WorkerTypeEnum;
    yarnEndpointAddress?: string;
    zeppelinRemoteSparkInterpreterPort?: number;
}
