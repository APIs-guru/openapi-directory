import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";
export declare class StartTopicsDetectionJobRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    dataAccessRoleArn: string;
    inputDataConfig: InputDataConfig;
    jobName?: string;
    numberOfTopics?: number;
    outputDataConfig: OutputDataConfig;
    tags?: Tag[];
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
