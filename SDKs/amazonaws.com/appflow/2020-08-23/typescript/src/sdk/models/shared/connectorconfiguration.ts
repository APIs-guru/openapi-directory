import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorMetadata } from "./connectormetadata";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { ScheduleFrequencyTypeEnum } from "./schedulefrequencytypeenum";
import { TriggerTypeEnum } from "./triggertypeenum";



// ConnectorConfiguration
/** 
 *  The configuration settings related to a given connector. 
**/
export class ConnectorConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canUseAsDestination" })
  canUseAsDestination?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canUseAsSource" })
  canUseAsSource?: boolean;

  @SpeakeasyMetadata({ data: "json, name=connectorMetadata" })
  connectorMetadata?: ConnectorMetadata;

  @SpeakeasyMetadata({ data: "json, name=isPrivateLinkEnabled" })
  isPrivateLinkEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPrivateLinkEndpointUrlRequired" })
  isPrivateLinkEndpointUrlRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportedDestinationConnectors" })
  supportedDestinationConnectors?: ConnectorTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=supportedSchedulingFrequencies" })
  supportedSchedulingFrequencies?: ScheduleFrequencyTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=supportedTriggerTypes" })
  supportedTriggerTypes?: TriggerTypeEnum[];
}
