import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This object contains regions to set up the aggregator and an IAM role to retrieve organization details.
**/
export declare class OrganizationAggregationSource extends SpeakeasyBase {
    allAwsRegions?: boolean;
    awsRegions?: string[];
    roleArn: string;
}
