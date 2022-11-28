import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";
export declare class StartDocumentClassificationJobRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    dataAccessRoleArn: string;
    documentClassifierArn: string;
    inputDataConfig: InputDataConfig;
    jobName?: string;
    outputDataConfig: OutputDataConfig;
    tags?: Tag[];
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
