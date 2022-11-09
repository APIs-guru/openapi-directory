import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SocketAddress
/** 
 * Information about the socket address.
**/
export class SocketAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=port" })
  port: number;
}
