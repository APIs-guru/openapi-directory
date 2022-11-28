import { SpeakeasyBase } from "../../../internal/utils";
import { DhcpConfiguration } from "./dhcpconfiguration";
import { Tag } from "./tag";
/**
 * Describes a set of DHCP options.
**/
export declare class DhcpOptions extends SpeakeasyBase {
    dhcpConfigurations?: DhcpConfiguration[];
    dhcpOptionsId?: string;
    ownerId?: string;
    tags?: Tag[];
}
