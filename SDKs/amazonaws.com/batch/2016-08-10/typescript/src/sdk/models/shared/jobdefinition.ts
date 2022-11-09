import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerProperties } from "./containerproperties";
import { NodeProperties } from "./nodeproperties";
import { PlatformCapabilityEnum } from "./platformcapabilityenum";
import { RetryStrategy } from "./retrystrategy";
import { JobTimeout } from "./jobtimeout";


// JobDefinition
/** 
 * An object representing an Batch job definition.
**/
export class JobDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerProperties" })
  containerProperties?: ContainerProperties;

  @Metadata({ data: "json, name=jobDefinitionArn" })
  jobDefinitionArn: string;

  @Metadata({ data: "json, name=jobDefinitionName" })
  jobDefinitionName: string;

  @Metadata({ data: "json, name=nodeProperties" })
  nodeProperties?: NodeProperties;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=platformCapabilities" })
  platformCapabilities?: PlatformCapabilityEnum[];

  @Metadata({ data: "json, name=propagateTags" })
  propagateTags?: boolean;

  @Metadata({ data: "json, name=retryStrategy" })
  retryStrategy?: RetryStrategy;

  @Metadata({ data: "json, name=revision" })
  revision: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=timeout" })
  timeout?: JobTimeout;

  @Metadata({ data: "json, name=type" })
  type: string;
}
