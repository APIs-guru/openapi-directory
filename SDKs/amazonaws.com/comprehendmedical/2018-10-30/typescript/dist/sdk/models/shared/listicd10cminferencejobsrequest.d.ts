import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComprehendMedicalAsyncJobFilter } from "./comprehendmedicalasyncjobfilter";
export declare class ListIcd10CmInferenceJobsRequest extends SpeakeasyBase {
    filter?: ComprehendMedicalAsyncJobFilter;
    maxResults?: number;
    nextToken?: string;
}
