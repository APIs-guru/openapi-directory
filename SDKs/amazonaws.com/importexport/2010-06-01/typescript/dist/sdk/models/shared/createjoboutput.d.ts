import { SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
import { JobTypeEnum } from "./jobtypeenum";
/**
 * Output structure for the CreateJob operation.
**/
export declare class CreateJobOutput extends SpeakeasyBase {
    artifactList?: Artifact[];
    jobId?: string;
    jobType?: JobTypeEnum;
    signature?: string;
    signatureFileContents?: string;
    warningMessage?: string;
}
