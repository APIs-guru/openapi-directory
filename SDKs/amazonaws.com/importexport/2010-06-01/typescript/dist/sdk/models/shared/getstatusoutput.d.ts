import { SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
import { JobTypeEnum } from "./jobtypeenum";
/**
 * Output structure for the GetStatus operation.
**/
export declare class GetStatusOutput extends SpeakeasyBase {
    artifactList?: Artifact[];
    carrier?: string;
    creationDate?: Date;
    currentManifest?: string;
    errorCount?: number;
    jobId?: string;
    jobType?: JobTypeEnum;
    locationCode?: string;
    locationMessage?: string;
    logBucket?: string;
    logKey?: string;
    progressCode?: string;
    progressMessage?: string;
    signature?: string;
    signatureFileContents?: string;
    trackingNumber?: string;
}
