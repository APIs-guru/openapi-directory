import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Duration } from "./duration";


// TcpTimeout
/** 
 * An object that represents types of timeouts. 
**/
export class TcpTimeout extends SpeakeasyBase {
  @Metadata({ data: "json, name=idle" })
  idle?: Duration;
}
