import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorMetadata } from "./connectormetadata";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { ScheduleFrequencyTypeEnum } from "./schedulefrequencytypeenum";
import { TriggerTypeEnum } from "./triggertypeenum";


// ConnectorConfiguration
/** 
 *  The configuration settings related to a given connector. 
**/
export class ConnectorConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=canUseAsDestination" })
  canUseAsDestination?: boolean;

  @Metadata({ data: "json, name=canUseAsSource" })
  canUseAsSource?: boolean;

  @Metadata({ data: "json, name=connectorMetadata" })
  connectorMetadata?: ConnectorMetadata;

  @Metadata({ data: "json, name=isPrivateLinkEnabled" })
  isPrivateLinkEnabled?: boolean;

  @Metadata({ data: "json, name=isPrivateLinkEndpointUrlRequired" })
  isPrivateLinkEndpointUrlRequired?: boolean;

  @Metadata({ data: "json, name=supportedDestinationConnectors" })
  supportedDestinationConnectors?: ConnectorTypeEnum[];

  @Metadata({ data: "json, name=supportedSchedulingFrequencies" })
  supportedSchedulingFrequencies?: ScheduleFrequencyTypeEnum[];

  @Metadata({ data: "json, name=supportedTriggerTypes" })
  supportedTriggerTypes?: TriggerTypeEnum[];
}
