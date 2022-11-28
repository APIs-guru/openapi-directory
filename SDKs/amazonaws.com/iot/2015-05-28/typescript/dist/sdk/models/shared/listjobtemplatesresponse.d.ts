import { SpeakeasyBase } from "../../../internal/utils";
import { JobTemplateSummary } from "./jobtemplatesummary";
export declare class ListJobTemplatesResponse extends SpeakeasyBase {
    jobTemplates?: JobTemplateSummary[];
    nextToken?: string;
}
