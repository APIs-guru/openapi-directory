import { SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";
/**
 * Describes a header. Reflects any changes made by a component as traffic passes through. The fields of an inbound header are null except for the first component of a path.
**/
export declare class AnalysisPacketHeader extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPortRanges?: PortRange[];
    protocol?: string;
    sourceAddresses?: string[];
    sourcePortRanges?: PortRange[];
}
