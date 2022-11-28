import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EfaInfo } from "./efainfo";
import { EnaSupportEnum } from "./enasupportenum";
import { NetworkCardInfo } from "./networkcardinfo";



// NetworkInfo
/** 
 * Describes the networking features of the instance type.
**/
export class NetworkInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultNetworkCardIndex?: number;

  @SpeakeasyMetadata()
  efaInfo?: EfaInfo;

  @SpeakeasyMetadata()
  efaSupported?: boolean;

  @SpeakeasyMetadata()
  enaSupport?: EnaSupportEnum;

  @SpeakeasyMetadata()
  encryptionInTransitSupported?: boolean;

  @SpeakeasyMetadata()
  ipv4AddressesPerInterface?: number;

  @SpeakeasyMetadata()
  ipv6AddressesPerInterface?: number;

  @SpeakeasyMetadata()
  ipv6Supported?: boolean;

  @SpeakeasyMetadata()
  maximumNetworkCards?: number;

  @SpeakeasyMetadata()
  maximumNetworkInterfaces?: number;

  @SpeakeasyMetadata({ elemType: NetworkCardInfo })
  networkCards?: NetworkCardInfo[];

  @SpeakeasyMetadata()
  networkPerformance?: string;
}
