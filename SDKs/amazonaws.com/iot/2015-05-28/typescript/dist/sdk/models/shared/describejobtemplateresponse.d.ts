import { SpeakeasyBase } from "../../../internal/utils";
import { AbortConfig } from "./abortconfig";
import { JobExecutionsRolloutConfig } from "./jobexecutionsrolloutconfig";
import { PresignedUrlConfig } from "./presignedurlconfig";
import { TimeoutConfig } from "./timeoutconfig";
export declare class DescribeJobTemplateResponse extends SpeakeasyBase {
    abortConfig?: AbortConfig;
    createdAt?: Date;
    description?: string;
    document?: string;
    documentSource?: string;
    jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
    jobTemplateArn?: string;
    jobTemplateId?: string;
    presignedUrlConfig?: PresignedUrlConfig;
    timeoutConfig?: TimeoutConfig;
}
