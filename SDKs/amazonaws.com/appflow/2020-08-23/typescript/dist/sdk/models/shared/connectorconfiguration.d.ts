import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorMetadata } from "./connectormetadata";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { ScheduleFrequencyTypeEnum } from "./schedulefrequencytypeenum";
import { TriggerTypeEnum } from "./triggertypeenum";
/**
 *  The configuration settings related to a given connector.
**/
export declare class ConnectorConfiguration extends SpeakeasyBase {
    canUseAsDestination?: boolean;
    canUseAsSource?: boolean;
    connectorMetadata?: ConnectorMetadata;
    isPrivateLinkEnabled?: boolean;
    isPrivateLinkEndpointUrlRequired?: boolean;
    supportedDestinationConnectors?: ConnectorTypeEnum[];
    supportedSchedulingFrequencies?: ScheduleFrequencyTypeEnum[];
    supportedTriggerTypes?: TriggerTypeEnum[];
}
