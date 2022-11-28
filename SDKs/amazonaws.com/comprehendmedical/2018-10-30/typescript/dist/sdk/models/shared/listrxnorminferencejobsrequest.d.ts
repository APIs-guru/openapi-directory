import { SpeakeasyBase } from "../../../internal/utils";
import { ComprehendMedicalAsyncJobFilter } from "./comprehendmedicalasyncjobfilter";
export declare class ListRxNormInferenceJobsRequest extends SpeakeasyBase {
    filter?: ComprehendMedicalAsyncJobFilter;
    maxResults?: number;
    nextToken?: string;
}
