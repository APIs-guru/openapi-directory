import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
export declare class StartPiiEntitiesDetectionJobResponse extends SpeakeasyBase {
    jobArn?: string;
    jobId?: string;
    jobStatus?: JobStatusEnum;
}
