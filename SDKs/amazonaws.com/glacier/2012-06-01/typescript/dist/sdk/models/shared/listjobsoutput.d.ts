import { SpeakeasyBase } from "../../../internal/utils";
import { GlacierJobDescription } from "./glacierjobdescription";
/**
 * Contains the Amazon S3 Glacier response to your request.
**/
export declare class ListJobsOutput extends SpeakeasyBase {
    jobList?: GlacierJobDescription[];
    marker?: string;
}
