import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerTypeEnum } from "./workertypeenum";
/**
 * A development endpoint where a developer can remotely debug extract, transform, and load (ETL) scripts.
**/
export declare class DevEndpoint extends SpeakeasyBase {
    arguments?: Map<string, string>;
    availabilityZone?: string;
    createdTimestamp?: Date;
    endpointName?: string;
    extraJarsS3Path?: string;
    extraPythonLibsS3Path?: string;
    failureReason?: string;
    glueVersion?: string;
    lastModifiedTimestamp?: Date;
    lastUpdateStatus?: string;
    numberOfNodes?: number;
    numberOfWorkers?: number;
    privateAddress?: string;
    publicAddress?: string;
    publicKey?: string;
    publicKeys?: string[];
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
