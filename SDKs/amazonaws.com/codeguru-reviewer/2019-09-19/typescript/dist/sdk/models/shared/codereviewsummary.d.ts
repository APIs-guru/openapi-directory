import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricsSummary } from "./metricssummary";
import { ProviderTypeEnum } from "./providertypeenum";
import { SourceCodeType } from "./sourcecodetype";
import { JobStateEnum } from "./jobstateenum";
import { TypeEnum } from "./typeenum";
/**
 *  Information about the summary of the code review.
**/
export declare class CodeReviewSummary extends SpeakeasyBase {
    codeReviewArn?: string;
    createdTimeStamp?: Date;
    lastUpdatedTimeStamp?: Date;
    metricsSummary?: MetricsSummary;
    name?: string;
    owner?: string;
    providerType?: ProviderTypeEnum;
    pullRequestId?: string;
    repositoryName?: string;
    sourceCodeType?: SourceCodeType;
    state?: JobStateEnum;
    type?: TypeEnum;
}
