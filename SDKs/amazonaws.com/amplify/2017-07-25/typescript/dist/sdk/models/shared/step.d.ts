import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 *  Describes an execution step, for an execution job, for an Amplify app.
**/
export declare class Step extends SpeakeasyBase {
    artifactsUrl?: string;
    context?: string;
    endTime: Date;
    logUrl?: string;
    screenshots?: Map<string, string>;
    startTime: Date;
    status: JobStatusEnum;
    statusReason?: string;
    stepName: string;
    testArtifactsUrl?: string;
    testConfigUrl?: string;
}
