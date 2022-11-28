import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DhcpConfiguration } from "./dhcpconfiguration";
import { Tag } from "./tag";



// DhcpOptions
/** 
 * Describes a set of DHCP options.
**/
export class DhcpOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DhcpConfiguration })
  dhcpConfigurations?: DhcpConfiguration[];

  @SpeakeasyMetadata()
  dhcpOptionsId?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
