import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
export declare class StartFhirImportJobResponse extends SpeakeasyBase {
    datastoreId?: string;
    jobId: string;
    jobStatus: JobStatusEnum;
}
