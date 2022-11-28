import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";



// AnalysisPacketHeader
/** 
 * Describes a header. Reflects any changes made by a component as traffic passes through. The fields of an inbound header are null except for the first component of a path.
**/
export class AnalysisPacketHeader extends SpeakeasyBase {
  @SpeakeasyMetadata()
  destinationAddresses?: string[];

  @SpeakeasyMetadata({ elemType: PortRange })
  destinationPortRanges?: PortRange[];

  @SpeakeasyMetadata()
  protocol?: string;

  @SpeakeasyMetadata()
  sourceAddresses?: string[];

  @SpeakeasyMetadata({ elemType: PortRange })
  sourcePortRanges?: PortRange[];
}
