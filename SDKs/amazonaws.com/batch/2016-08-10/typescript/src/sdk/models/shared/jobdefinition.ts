import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=containerProperties" })
  containerProperties?: ContainerProperties;

  @SpeakeasyMetadata({ data: "json, name=jobDefinitionArn" })
  jobDefinitionArn: string;

  @SpeakeasyMetadata({ data: "json, name=jobDefinitionName" })
  jobDefinitionName: string;

  @SpeakeasyMetadata({ data: "json, name=nodeProperties" })
  nodeProperties?: NodeProperties;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=platformCapabilities" })
  platformCapabilities?: PlatformCapabilityEnum[];

  @SpeakeasyMetadata({ data: "json, name=propagateTags" })
  propagateTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=retryStrategy" })
  retryStrategy?: RetryStrategy;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: JobTimeout;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
