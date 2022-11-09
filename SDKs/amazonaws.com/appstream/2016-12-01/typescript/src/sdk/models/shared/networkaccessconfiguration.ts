import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkAccessConfiguration
/** 
 * Describes the network details of the fleet or image builder instance.
**/
export class NetworkAccessConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=EniId" })
  eniId?: string;

  @Metadata({ data: "json, name=EniPrivateIpAddress" })
  eniPrivateIpAddress?: string;
}
