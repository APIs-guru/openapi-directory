import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetCidrReservationTypeEnum } from "./subnetcidrreservationtypeenum";
import { Tag } from "./tag";



// SubnetCidrReservation
/** 
 * Describes a subnet CIDR reservation.
**/
export class SubnetCidrReservation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidr?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  reservationType?: SubnetCidrReservationTypeEnum;

  @SpeakeasyMetadata()
  subnetCidrReservationId?: string;

  @SpeakeasyMetadata()
  subnetId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
