import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigDetails } from "./configdetails";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";
/**
 * Dataflow details for the destination side.
**/
export declare class Destination extends SpeakeasyBase {
    configDetails?: ConfigDetails;
    configId?: string;
    configType?: ConfigCapabilityTypeEnum;
    dataflowDestinationRegion?: string;
}
