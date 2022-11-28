import { SpeakeasyBase } from "../../../internal/utils";
import { ContributorInsightsActionEnum } from "./contributorinsightsactionenum";
export declare class UpdateContributorInsightsInput extends SpeakeasyBase {
    contributorInsightsAction: ContributorInsightsActionEnum;
    indexName?: string;
    tableName: string;
}
