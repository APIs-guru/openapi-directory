import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The infrastructure used when building Amazon EC2 AMIs.
**/
export declare class InfrastructureConfigurationSummary extends SpeakeasyBase {
    arn?: string;
    dateCreated?: string;
    dateUpdated?: string;
    description?: string;
    instanceProfileName?: string;
    instanceTypes?: string[];
    name?: string;
    resourceTags?: Map<string, string>;
    tags?: Map<string, string>;
}
