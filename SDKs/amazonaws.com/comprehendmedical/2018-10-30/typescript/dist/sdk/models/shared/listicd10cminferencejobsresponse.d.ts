import { SpeakeasyBase } from "../../../internal/utils";
import { ComprehendMedicalAsyncJobProperties } from "./comprehendmedicalasyncjobproperties";
export declare class ListIcd10CmInferenceJobsResponse extends SpeakeasyBase {
    comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];
    nextToken?: string;
}
