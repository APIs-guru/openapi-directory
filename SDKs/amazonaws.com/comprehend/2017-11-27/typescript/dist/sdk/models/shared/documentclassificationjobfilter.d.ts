import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request.
**/
export declare class DocumentClassificationJobFilter extends SpeakeasyBase {
    jobName?: string;
    jobStatus?: JobStatusEnum;
    submitTimeAfter?: Date;
    submitTimeBefore?: Date;
}
