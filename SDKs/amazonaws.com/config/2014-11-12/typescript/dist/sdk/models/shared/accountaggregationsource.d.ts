import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of accounts and regions.
**/
export declare class AccountAggregationSource extends SpeakeasyBase {
    accountIds: string[];
    allAwsRegions?: boolean;
    awsRegions?: string[];
}
