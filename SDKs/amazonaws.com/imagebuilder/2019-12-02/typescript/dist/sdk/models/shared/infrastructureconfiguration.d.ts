import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Logging } from "./logging";
/**
 * Details of the infrastructure configuration.
**/
export declare class InfrastructureConfiguration extends SpeakeasyBase {
    arn?: string;
    dateCreated?: string;
    dateUpdated?: string;
    description?: string;
    instanceProfileName?: string;
    instanceTypes?: string[];
    keyPair?: string;
    logging?: Logging;
    name?: string;
    resourceTags?: Map<string, string>;
    securityGroupIds?: string[];
    snsTopicArn?: string;
    subnetId?: string;
    tags?: Map<string, string>;
    terminateInstanceOnFailure?: boolean;
}
