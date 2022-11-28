import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterface } from "./networkinterface";
import { Tag } from "./tag";
/**
 * A collection of attributes of the host from which the finding is generated.
**/
export declare class AssetAttributes extends SpeakeasyBase {
    agentId?: string;
    amiId?: string;
    autoScalingGroup?: string;
    hostname?: string;
    ipv4Addresses?: string[];
    networkInterfaces?: NetworkInterface[];
    schemaVersion: number;
    tags?: Tag[];
}
