import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// TrafficMirrorSession
/** 
 * Describes a Traffic Mirror session.
**/
export class TrafficMirrorSession extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  packetLength?: number;

  @SpeakeasyMetadata()
  sessionNumber?: number;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  trafficMirrorFilterId?: string;

  @SpeakeasyMetadata()
  trafficMirrorSessionId?: string;

  @SpeakeasyMetadata()
  trafficMirrorTargetId?: string;

  @SpeakeasyMetadata()
  virtualNetworkId?: number;
}
