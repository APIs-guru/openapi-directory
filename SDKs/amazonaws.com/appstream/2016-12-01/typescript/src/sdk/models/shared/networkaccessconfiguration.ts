import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkAccessConfiguration
/** 
 * Describes the network details of the fleet or image builder instance.
**/
export class NetworkAccessConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EniId" })
  eniId?: string;

  @SpeakeasyMetadata({ data: "json, name=EniPrivateIpAddress" })
  eniPrivateIpAddress?: string;
}
