import { SpeakeasyBase } from "../../../internal/utils";
import { GroupIdentifier } from "./groupidentifier";
import { Instance } from "./instance";
/**
 * Describes a launch request for one or more instances, and includes owner, requester, and security group information that applies to all instances in the launch request.
**/
export declare class Reservation extends SpeakeasyBase {
    groups?: GroupIdentifier[];
    instances?: Instance[];
    ownerId?: string;
    requesterId?: string;
    reservationId?: string;
}
