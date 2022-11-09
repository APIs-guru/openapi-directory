import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  The result structure for the create a new deployment request.
**/
export declare class CreateDeploymentResult extends SpeakeasyBase {
    fileUploadUrls: Map<string, string>;
    jobId?: string;
    zipUploadUrl: string;
}
