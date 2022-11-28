import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";



// TcpTimeout
/** 
 * An object that represents types of timeouts. 
**/
export class TcpTimeout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idle" })
  idle?: Duration;
}
