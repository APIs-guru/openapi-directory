import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Contains details about the policy generation status and properties.
**/
export declare class PolicyGeneration extends SpeakeasyBase {
    completedOn?: Date;
    jobId: string;
    principalArn: string;
    startedOn: Date;
    status: JobStatusEnum;
}
