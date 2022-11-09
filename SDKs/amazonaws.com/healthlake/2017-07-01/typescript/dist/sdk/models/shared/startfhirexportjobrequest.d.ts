import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OutputDataConfig } from "./outputdataconfig";
export declare class StartFhirExportJobRequest extends SpeakeasyBase {
    clientToken: string;
    dataAccessRoleArn: string;
    datastoreId: string;
    jobName?: string;
    outputDataConfig: OutputDataConfig;
}
