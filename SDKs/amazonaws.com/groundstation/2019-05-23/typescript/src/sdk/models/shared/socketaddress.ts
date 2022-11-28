import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SocketAddress
/** 
 * Information about the socket address.
**/
export class SocketAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;
}
