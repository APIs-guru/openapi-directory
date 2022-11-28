import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkCardInfo
/** 
 * Describes the network card support of the instance type.
**/
export class NetworkCardInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  maximumNetworkInterfaces?: number;

  @SpeakeasyMetadata()
  networkCardIndex?: number;

  @SpeakeasyMetadata()
  networkPerformance?: string;
}
