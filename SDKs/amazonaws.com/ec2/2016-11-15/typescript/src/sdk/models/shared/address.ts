import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainTypeEnum } from "./domaintypeenum";
import { Tag } from "./tag";



// Address
/** 
 * Describes an Elastic IP address, or a carrier IP address.
**/
export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationId?: string;

  @SpeakeasyMetadata()
  associationId?: string;

  @SpeakeasyMetadata()
  carrierIp?: string;

  @SpeakeasyMetadata()
  customerOwnedIp?: string;

  @SpeakeasyMetadata()
  customerOwnedIpv4Pool?: string;

  @SpeakeasyMetadata()
  domain?: DomainTypeEnum;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  networkBorderGroup?: string;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  networkInterfaceOwnerId?: string;

  @SpeakeasyMetadata()
  privateIpAddress?: string;

  @SpeakeasyMetadata()
  publicIp?: string;

  @SpeakeasyMetadata()
  publicIpv4Pool?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
