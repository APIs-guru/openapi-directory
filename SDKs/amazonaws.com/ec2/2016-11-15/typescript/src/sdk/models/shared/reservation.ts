import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupIdentifier } from "./groupidentifier";
import { Instance } from "./instance";



// Reservation
/** 
 * Describes a launch request for one or more instances, and includes owner, requester, and security group information that applies to all instances in the launch request.
**/
export class Reservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GroupIdentifier })
  groups?: GroupIdentifier[];

  @SpeakeasyMetadata({ elemType: Instance })
  instances?: Instance[];

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  requesterId?: string;

  @SpeakeasyMetadata()
  reservationId?: string;
}
