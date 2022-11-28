import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerTypeEnum } from "./workertypeenum";
export declare class CreateDevEndpointRequest extends SpeakeasyBase {
    arguments?: Map<string, string>;
    endpointName: string;
    extraJarsS3Path?: string;
    extraPythonLibsS3Path?: string;
    glueVersion?: string;
    numberOfNodes?: number;
    numberOfWorkers?: number;
    publicKey?: string;
    publicKeys?: string[];
    roleArn: string;
    securityConfiguration?: string;
    securityGroupIds?: string[];
    subnetId?: string;
    tags?: Map<string, string>;
    workerType?: WorkerTypeEnum;
}
