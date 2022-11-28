import { SpeakeasyBase } from "../../../internal/utils";
import { ComprehendMedicalAsyncJobFilter } from "./comprehendmedicalasyncjobfilter";
export declare class ListEntitiesDetectionV2JobsRequest extends SpeakeasyBase {
    filter?: ComprehendMedicalAsyncJobFilter;
    maxResults?: number;
    nextToken?: string;
}
