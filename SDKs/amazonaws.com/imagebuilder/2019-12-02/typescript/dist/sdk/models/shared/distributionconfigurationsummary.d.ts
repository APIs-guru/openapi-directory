import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A high-level overview of a distribution configuration.
**/
export declare class DistributionConfigurationSummary extends SpeakeasyBase {
    arn?: string;
    dateCreated?: string;
    dateUpdated?: string;
    description?: string;
    name?: string;
    regions?: string[];
    tags?: Map<string, string>;
}
