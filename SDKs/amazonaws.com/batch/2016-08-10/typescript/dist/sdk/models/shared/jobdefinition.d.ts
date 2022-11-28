import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerProperties } from "./containerproperties";
import { NodeProperties } from "./nodeproperties";
import { PlatformCapabilityEnum } from "./platformcapabilityenum";
import { RetryStrategy } from "./retrystrategy";
import { JobTimeout } from "./jobtimeout";
/**
 * An object representing an Batch job definition.
**/
export declare class JobDefinition extends SpeakeasyBase {
    containerProperties?: ContainerProperties;
    jobDefinitionArn: string;
    jobDefinitionName: string;
    nodeProperties?: NodeProperties;
    parameters?: Map<string, string>;
    platformCapabilities?: PlatformCapabilityEnum[];
    propagateTags?: boolean;
    retryStrategy?: RetryStrategy;
    revision: number;
    status?: string;
    tags?: Map<string, string>;
    timeout?: JobTimeout;
    type: string;
}
