import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigDetails } from "./configdetails";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";
/**
 * Dataflow details for the source side.
**/
export declare class Source extends SpeakeasyBase {
    configDetails?: ConfigDetails;
    configId?: string;
    configType?: ConfigCapabilityTypeEnum;
    dataflowSourceRegion?: string;
}
