import { SpeakeasyBase } from "../../../internal/utils";
import { EfaInfo } from "./efainfo";
import { EnaSupportEnum } from "./enasupportenum";
import { NetworkCardInfo } from "./networkcardinfo";
/**
 * Describes the networking features of the instance type.
**/
export declare class NetworkInfo extends SpeakeasyBase {
    defaultNetworkCardIndex?: number;
    efaInfo?: EfaInfo;
    efaSupported?: boolean;
    enaSupport?: EnaSupportEnum;
    encryptionInTransitSupported?: boolean;
    ipv4AddressesPerInterface?: number;
    ipv6AddressesPerInterface?: number;
    ipv6Supported?: boolean;
    maximumNetworkCards?: number;
    maximumNetworkInterfaces?: number;
    networkCards?: NetworkCardInfo[];
    networkPerformance?: string;
}
