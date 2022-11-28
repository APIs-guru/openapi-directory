import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetCidrReservationTypeEnum } from "./subnetcidrreservationtypeenum";
import { Tag } from "./tag";
/**
 * Describes a subnet CIDR reservation.
**/
export declare class SubnetCidrReservation extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    ownerId?: string;
    reservationType?: SubnetCidrReservationTypeEnum;
    subnetCidrReservationId?: string;
    subnetId?: string;
    tags?: Tag[];
}
