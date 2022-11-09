import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ArrayPropertiesDetail } from "./arraypropertiesdetail";
import { AttemptDetail } from "./attemptdetail";
import { ContainerDetail } from "./containerdetail";
import { JobDependency } from "./jobdependency";
import { NodeDetails } from "./nodedetails";
import { NodeProperties } from "./nodeproperties";
import { PlatformCapabilityEnum } from "./platformcapabilityenum";
import { RetryStrategy } from "./retrystrategy";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTimeout } from "./jobtimeout";
/**
 * An object representing an Batch job.
**/
export declare class JobDetail extends SpeakeasyBase {
    arrayProperties?: ArrayPropertiesDetail;
    attempts?: AttemptDetail[];
    container?: ContainerDetail;
    createdAt?: number;
    dependsOn?: JobDependency[];
    jobArn?: string;
    jobDefinition: string;
    jobId: string;
    jobName: string;
    jobQueue: string;
    nodeDetails?: NodeDetails;
    nodeProperties?: NodeProperties;
    parameters?: Map<string, string>;
    platformCapabilities?: PlatformCapabilityEnum[];
    propagateTags?: boolean;
    retryStrategy?: RetryStrategy;
    startedAt: number;
    status: JobStatusEnum;
    statusReason?: string;
    stoppedAt?: number;
    tags?: Map<string, string>;
    timeout?: JobTimeout;
}
