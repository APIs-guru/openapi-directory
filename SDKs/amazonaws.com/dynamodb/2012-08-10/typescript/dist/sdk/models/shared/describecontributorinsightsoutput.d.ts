import { SpeakeasyBase } from "../../../internal/utils";
import { ContributorInsightsStatusEnum } from "./contributorinsightsstatusenum";
import { FailureException } from "./failureexception";
export declare class DescribeContributorInsightsOutput extends SpeakeasyBase {
    contributorInsightsRuleList?: string[];
    contributorInsightsStatus?: ContributorInsightsStatusEnum;
    failureException?: FailureException;
    indexName?: string;
    lastUpdateDateTime?: Date;
    tableName?: string;
}
