import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";
export declare class StartFhirImportJobRequest extends SpeakeasyBase {
    clientToken: string;
    dataAccessRoleArn: string;
    datastoreId: string;
    inputDataConfig: InputDataConfig;
    jobName?: string;
    jobOutputDataConfig: OutputDataConfig;
}
